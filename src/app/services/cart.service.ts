import { Injectable } from '@angular/core';
import { BehaviorSubject, from, mergeMap, of, reduce } from 'rxjs';
import { OrderItem } from '../_models/OrderItem';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: OrderItem[] = [];
  private STORAGE_KEY = "cart";
  constructor(private storage: LocalStorageService)  {
    this.reloadCart();
  }
  //Create a behavior subject that always returns the current value of items array to the subscribers
  item$ = new BehaviorSubject<OrderItem[]>([]);
  itemCost$ = this.item$.pipe(
    mergeMap(items => {
      const price = items.reduce((acc, item) => { return acc + (item.quantity * item.price) }, 0);
      return of(price);
    })
  )

  add(item: OrderItem) {
    const pos = this.items.findIndex((v) => v.itemId == item.itemId && v.size == item.size);
    if (pos == -1) {
      this.items.push(item);
      this.item$.next(this.items);
      this.saveToLocalStorage();
    } else {
      this.update(item, { quantity: item.quantity + this.items[pos].quantity })
    }
  }

  update(item: OrderItem, newData: Partial<OrderItem>) {
    const pos = this.items.findIndex((v) => v.itemId == item.itemId && v.size == item.size);
    if (pos != -1) {
      this.items.splice(pos, 1, { ...item, ...newData });
      this.item$.next(this.items);
      this.saveToLocalStorage();
    }
  }

  delete(item: OrderItem) {
    const pos = this.items.findIndex((v) => v.itemId == item.itemId && v.size == item.size);
    if (pos != -1) {
      this.items.splice(pos, 1);
      this.item$.next(this.items);
      this.saveToLocalStorage();
    }
  }

  private saveToLocalStorage() {
    this.storage.save(this.STORAGE_KEY, this.items);
  }

  public clearCart() {
    this.storage.remove("cart");
    this.reloadCart();
  } 

  private reloadCart() {
    const data = this.storage.get<OrderItem[]>(this.STORAGE_KEY)
    if(data) {
      this.items = data;
      this.item$.next(this.items);
    } else {
      this.items = [];
      this.item$.next(this.items);
    }
  }
}
