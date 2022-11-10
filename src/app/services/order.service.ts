import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, mergeMap, Observable, switchMap, take, zip } from 'rxjs';
import { Order, Status } from '../_models/Order';
import { OrderItem } from '../_models/OrderItem';
import { CartService } from './cart.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = `http://localhost:3000/order`;
  private STORAGE_KEY = "order";
  constructor(private http: HttpClient, public cart: CartService, private storage: LocalStorageService) { 
    this.reloadOrder();
  }
  private order!:Order;
  order$ = new BehaviorSubject<Order>({} as Order);
  add(order: Order) {
    let observable1 = this.cart.item$;
    let observable2 = (items: OrderItem[]) => this.http.post<Order>(this.url, { ...order, items: items, status: order.status || Status.placed })
    return observable1.pipe(take(1), switchMap(items => observable2(items)));
  }

  get(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.url}/${id}`);
  }

  addItemsToOrder(id: number) {
    let observable1 = this.cart.item$;
    let observable2 = (items: OrderItem[]) => this.http.post<Order>(`${this.url}/${id}/item`, items)
    return observable1.pipe(take(1), switchMap(items => observable2(items)));
  }

  saveOrderToLocalStorage(order: Order) {
    this.order = order;
    this.order$.next(this.order);
    this.storage.save(this.STORAGE_KEY, order);
  }

  removeOrder() {
    this.storage.remove(this.STORAGE_KEY);
    this.reloadOrder();
  }

  private reloadOrder() {
    const data = this.storage.get<Order>(this.STORAGE_KEY)
    if(data) {
      this.order = data;
      this.order$.next(this.order);
    } else {
      this.order = {} as Order;
      this.order$.next(this.order);
    }
  }
}
