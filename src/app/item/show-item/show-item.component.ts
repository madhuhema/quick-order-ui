import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/_models/Item';
import { DeleteItemComponent } from '../delete-item/delete-item.component';

@Component({
  selector: 'qo-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss']
})
export class ShowItemComponent implements OnInit {
  item!: Item;
  constructor(private activatedRoute: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ item }) => {
      this.item = item;
    })
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '250px',
      data: { ...this.item }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.isDeleted) {
        console.log(`the item ${result.name} has been deleted`);
      }
    });
  }
}
