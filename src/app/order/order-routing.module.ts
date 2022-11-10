import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { OrderComponent } from './order.component';
import { OrderResolver } from './order.resolver';

const routes: Routes = [{
  path:"", component: OrderComponent
},
{
  path:"cart", component: CartComponent,
},
{
  path:":id", component: OrderComponent, resolve: { order: OrderResolver}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
