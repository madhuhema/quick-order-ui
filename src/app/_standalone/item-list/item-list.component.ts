import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { OrderItem } from 'src/app/_models/OrderItem';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { OrderItemComponent } from 'src/app/item/order-item/order-item.component';
import { Item } from 'src/app/_models/Item';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'qo-item-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input('item')
  item!: OrderItem;

  @Input('index')
  index!: number;

  @Input('deletable')
  canDelete: boolean = true;

  @Input('updatable')
  canAddOrMinus: boolean = true;

  @Input('editable')
  edit: boolean = false;

  constructor(public cart: CartService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openOrderItemDialog(item:OrderItem): void {
    const dialogRef = this.dialog.open(OrderItemComponent, {
      data: { orderItem: item
       }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result?.itemId) {
        // this.addToCart(result);
        console.log(`the item ${result.name} has been added to cart`);
      }
    });
  }

}
