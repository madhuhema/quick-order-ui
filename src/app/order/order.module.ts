import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { CartModule } from '../cart/cart.module';
import { ItemListComponent } from '../_standalone/item-list/item-list.component';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    CartModule,
    OrderRoutingModule,
    ItemListComponent
  ]
})
export class OrderModule { }
