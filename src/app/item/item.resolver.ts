import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ItemService } from '../services/item.service';
import { Item } from '../_models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemResolver implements Resolve<Item> {
  constructor(private api: ItemService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> {
    return this.api.get(parseInt(route.paramMap.get('id') as string));
  }
}
