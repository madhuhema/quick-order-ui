import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {path: "item", loadChildren: () => import('./item/item.module').then(m => m.ItemModule)  },
  {path: "order", loadChildren: () => import('./order/order.module').then(m => m.OrderModule)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
