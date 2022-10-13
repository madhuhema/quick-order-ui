import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemService } from 'src/app/services/item.service';
import { Item, ItemSize } from 'src/app/_models/Item';
import { OrderItem } from 'src/app/_models/OrderItem';

@Component({
  selector: 'qo-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  sizes: any;
  constructor(public dialogRef: MatDialogRef<OrderItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item,
    private api: ItemService) {
    this.sizes = Object.values(this.data.size);
  }

  ngOnInit(): void {
  }
  createOrderItem = new FormGroup({
    size: new FormControl('regular'),
    quantity: new FormControl(1),
    preferences: new FormControl(''),
    itemId: new FormControl(this.data.id),
    name: new FormControl(this.data.name),
    price: new FormControl(this.data.price),
  })
  onSubmit() {
    if (this.data.id != undefined) {
      const result = this.createOrderItem.value as OrderItem;
      this.dialogRef.close(result);
    }
  }
  onCancel(): void {
    this.dialogRef.close();
  }

}
