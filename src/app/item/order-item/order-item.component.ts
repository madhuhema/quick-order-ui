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
  sizes!: any;
  createOrderItem!: FormGroup;
  constructor(public dialogRef: MatDialogRef<OrderItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      item?: Item,
      orderItem?: OrderItem
    },
    private api: ItemService) {
    if (!!this.data.item) {
      this.sizes = Object.values(this.data.item.size);
    }

  }

  ngOnInit(): void {
    debugger;
    this.createOrderItem = new FormGroup({
      size: new FormControl({ value: this.sizes?.length > 0 ? this.sizes[0] : this.data.orderItem?.size, 
        disabled: !!this.data.orderItem
      }),
      quantity: new FormControl(1),
      preferences: new FormControl(''  || this.data.orderItem?.preferences),
      itemId: new FormControl(this.data.item?.id || this.data.orderItem?.itemId),
      name: new FormControl(this.data.item?.name || this.data.orderItem?.name),
      price: new FormControl(this.data.item?.price || this.data.orderItem?.price),
    })
  }

  onSubmit() {
    if (!!this.data.item) {
      if (this.data.item?.id != undefined) {
        const result = this.createOrderItem.value as OrderItem;
        this.dialogRef.close(result);
      }
    }

    if (!!this.data.orderItem) {

    }

  }
  onCancel(): void {
    this.dialogRef.close();
  }

}
