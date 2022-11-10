import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { LocalStorageService } from '../services/local-storage.service';
import { OrderService } from '../services/order.service';
import { Order } from '../_models/Order';

@Component({
  selector: 'qo-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  placedOrder!: Order;
  constructor(public cart: CartService, public dialogRef: MatDialogRef<CartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: Router, public order: OrderService, private _snackBar: MatSnackBar, public storage:
      LocalStorageService) { }

  ngOnInit(): void {
    this.order.order$.subscribe(val => this.placedOrder = val);
  }

  createOrder = new FormGroup({
    status: new FormControl(),
    table_number: new FormControl('1')
  })

  async placeOrder() {
    this.order.add(this.createOrder.value as any).subscribe({
      next: (res) => {
        this._snackBar.open("Order has been placed successfully", "close", { duration: 2000 });
        this.cart.clearCart();
        this.order.saveOrderToLocalStorage(res as Order);
        this.route.navigate(['/order', res.id]);
      },
      error: (err) => {
        console.log("Couldn't place order", err);
        this._snackBar.open("Couldn't place order", "close");
      }
    })
  }

  showCart() {
    if (this.placedOrder?.id) {
      this.route.navigate([`/order/${this.placedOrder.id}`]);
    } else {
      this.route.navigate(['/order/cart']);
    }
    this.dialogRef.close();
  }

  onBack() {
    this.route.navigate(['']);
    if (this.dialogRef.close != undefined)
      this.dialogRef.close();
  }

}
