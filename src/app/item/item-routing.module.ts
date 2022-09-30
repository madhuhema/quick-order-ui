import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './create-item/create-item.component';
import { ItemComponent } from './item.component';
import { ItemResolver } from './item.resolver';
import { UpdateItemComponent } from './update-item/update-item.component';

const routes: Routes = [{
  path:"", component: ItemComponent
},
{
  path:"add", component: CreateItemComponent
},
{
  path:"update/:id", component: UpdateItemComponent, resolve: { item: ItemResolver}
},
{
  path:"show/:id", component: ItemComponent, resolve: { item: ItemResolver}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
