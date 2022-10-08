import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemService } from '../services/item.service';
import { Item } from '../_models/Item';
import { CreateItemComponent } from './create-item/create-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';

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

  openCreateDialog() {
    const dialogRefernce = this.dialog.open(CreateItemComponent);
    // dialogRefernce.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  openDeleteDialog(item:Item): void {
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '250px',
      data: { ...item }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.isDeleted) {
        console.log(`the item ${result.name} has been deleted`);
      }
    });
  } 
}
