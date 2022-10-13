import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';
import { OrderItem } from '../_models/OrderItem';

@Component({
  selector: 'qo-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cart: CartService, public dialogRef: MatDialogRef<CartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private api: ItemService, private route: Router) { }

  ngOnInit(): void {
  }

  createOrder() {

  }

  showCart() {
    this.route.navigate(['/order/cart']);
    this.dialogRef.close();
  }
  onBack() {
    this.route.navigate(['']);
    if (this.dialogRef.close != undefined)
      this.dialogRef.close();
  }
}
