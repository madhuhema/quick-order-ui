import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemService } from '../services/item.service';
import { Item } from '../_models/Item';
import { CreateItemComponent } from './create-item/create-item.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  items: Item[] = [];
  constructor(private api: ItemService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.api.getAll().subscribe((res) => {
      this.items = res;
      console.log(res);
    })
  }

  delete(id: number | undefined) {
    if (id != undefined) {
      this.api.delete(id).subscribe();
    }
  }

  openCreateDialog() {
    const dialogRefernce = this.dialog.open(CreateItemComponent);
    // dialogRefernce.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
