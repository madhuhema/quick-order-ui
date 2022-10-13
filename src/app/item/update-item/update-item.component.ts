import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { ItemSize, Item, ItemStatus, ItemType } from 'src/app/_models/Item';
import { DeleteItemComponent } from '../delete-item/delete-item.component';

@Component({
  selector: 'qo-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent implements OnInit {

  sizes = Object.values(ItemSize);
  types = Object.values(ItemType);
  status = Object.values(ItemStatus);
  result: any;
  item!: Item;

  constructor(
    public dialogRef: MatDialogRef<UpdateItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item,
    private api: ItemService,
  ) { }

  ngOnInit(): void {
      this.updateItemForm.patchValue(this.data);
  }
  
  updateItemForm =  new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    cuisine: new FormControl(''),
    type:new FormControl(''),
    status: new FormControl(''),
    prep_time_in_mins: new FormControl(0),
    size: new FormControl('')
  })

  update() {
    //validate form before submitting
    console.log("Form values", this.updateItemForm.value);
    this.api.update(this.updateItemForm.value as Item).subscribe(() => {
      this.result = this.data;
      this.result.isUpdated = true;
      this.dialogRef.close(this.result);
    });
  }

  onCancel(): void {
    this.dialogRef.close({ isUpdated: false });
  }
}
