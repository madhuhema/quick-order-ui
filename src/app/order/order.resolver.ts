import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { OrderService } from '../services/order.service';
import { Order } from '../_models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderResolver implements Resolve<Order> {
  constructor(private api: OrderService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order> {
    return this.api.get(parseInt(route.paramMap.get('id') as string));
  }
}
