import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';
import { Item } from '../_models/Item';
import { OrderItem } from '../_models/OrderItem';
import { CreateItemComponent } from './create-item/create-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  items: Item[] = [];
  constructor(private api: ItemService, public dialog: MatDialog, private cart: CartService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.api.getAll().subscribe((res) => {
      this.items = res;
      console.log(res);
    })
  }

  openCreateDialog() {
    const dialogRefernce = this.dialog.open(CreateItemComponent);
    // dialogRefernce.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  openDeleteDialog(item:Item): void {
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '250px',
      data: { ...item }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.isDeleted) {
        console.log(`the item ${result.name} has been deleted`);
      }
    });
  } 

  openUpdateDialog(item:Item): void {
    const dialogRef = this.dialog.open(UpdateItemComponent, {
      data: { ...item }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.isUpdated) {
        console.log(`the item ${result.name} has been updated`);
      }
    });
  }

  openOrderItemDialog(item:Item): void {
    const dialogRef = this.dialog.open(OrderItemComponent, {
      data: { ...item }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result?.itemId) {
        this.addToCart(result);
        console.log(`the item ${result.name} has been added to cart`);
      }
    });
  }
  
  addToCart(item: OrderItem) {
      console.log("From add cart method", item);
      this.cart.add(item);
  }
  openCartDialog() {
    const dialogRefernce = this.dialog.open(CartComponent, {
      width: "80%",
      data: { asDialog: true }
    });
  }
}
