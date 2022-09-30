import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';
import { Item, ItemSize, ItemStatus, ItemType } from 'src/app/_models/Item';

@Component({
  selector: 'qo-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
sizes =  Object.values(ItemSize)
types = Object.values(ItemType)
status = Object.values(ItemStatus)

  constructor(private api: ItemService) { }

  ngOnInit(): void {
  }

//   cuisine
// : 
// "Indian"
// description
// : 
// "A plate of basmati rice cooked with aromatic spices and served with dum cooked chicken"
// name
// : 
// "Chicken Briyani"
// prep_time_in_mins
// : 
// "30"
// price
// : 
// 14
// size
// : 
// "small"
// status
// : 
// "Available"
// type
// : 
// "NON-VEG"
  
  createItemForm =  new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    cuisine: new FormControl(''),
    type:new FormControl(''),
    status: new FormControl(''),
    prep_time_in_mins: new FormControl(0),
    size: new FormControl('')
  })

  onSubmit() {
    //validate form before submitting
    console.log("Form values", this.createItemForm.value);
    this.api.add(this.createItemForm.value as Item).subscribe();
  }
}
