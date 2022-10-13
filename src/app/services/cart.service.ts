import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderItem } from '../_models/OrderItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: OrderItem[] = [];

  //Create a behavior subject that always returns the current value of items array to the subscribers
  item$ = new BehaviorSubject<OrderItem[]>([]);

  add(item: OrderItem) {
    this.items.push(item);
    this.item$.next(this.items);
  }

  update(item: OrderItem, newData: Partial<OrderItem>) {
    debugger;
    const pos = this.items.findIndex((v) => { v.itemId == item.itemId && v.size == item.size });
    if (pos != -1) {
      this.items.splice(pos, 1, { ...item, ...newData });
      this.item$.next(this.items);
    }
  }

  delete(item: OrderItem) {
    const pos = this.items.findIndex((v) => { v.itemId == item.itemId && v.size == item.size });
    if (pos != -1) {
      this.items.splice(pos, 1);
      this.item$.next(this.items);
    }  
  }
}
