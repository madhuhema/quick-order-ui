import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", loadChildren: () => import('./user/user.module').then(m => m.UserModule)  },
  {path: "item", loadChildren: () => import('./item/item.module').then(m => m.ItemModule)  },
  {path: "order", loadChildren: () => import('./order/order.module').then(m => m.OrderModule)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
