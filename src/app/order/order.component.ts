import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { Order, Status } from '../_models/Order';

@Component({
  selector: 'qo-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  order!: Order;
  constructor(private activatedRoute: ActivatedRoute, public cart: CartService, public orderService: OrderService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ order }) => {
      this.order = order;
      console.log("From order", order);
    })
  }

  updateOrder() {
    if (!!this.order.id && this.order.status != Status.completed) {
      this.orderService.addItemsToOrder(this.order.id).subscribe({
        next: (res) => {
          console.log("Items added to Order successfully", res);
          this.cart.clearCart();
        }, error: (error) => {
          console.error(error);
        }
      });
    }
  }

}
