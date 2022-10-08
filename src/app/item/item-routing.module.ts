import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './create-item/create-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { ItemComponent } from './item.component';
import { ItemResolver } from './item.resolver';
import { ShowItemComponent } from './show-item/show-item.component';
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
  path:"show/:id", component: ShowItemComponent, resolve: { item: ItemResolver}
},
{
  path:"delete/:id", component: DeleteItemComponent, resolve: { item: ItemResolver}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
