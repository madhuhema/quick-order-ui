import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { ItemSize, Item } from 'src/app/_models/Item';

@Component({
  selector: 'qo-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent implements OnInit {

  sizes =  Object.values(ItemSize);

  constructor(private api: ItemService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({item}) => {
      this.updateItemForm.patchValue(item);
    })
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

  onSubmit() {
    //validate form before submitting
    console.log("Form values", this.updateItemForm.value);
    this.api.update(this.updateItemForm.value as Item).subscribe();
  }


}
