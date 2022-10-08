import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/_models/Item';

@Component({
  selector: 'qo-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss']
})
export class DeleteItemComponent {
  result: any;
  item!: Item;

  constructor(
    public dialogRef: MatDialogRef<DeleteItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item,
    private api: ItemService,
  ) { }


  delete() {
    console.log(this.data, "from delete")
    if (this.data.id != undefined) {
      this.api.delete(this.data.id).subscribe(() => {
        this.result = this.data;
        this.result.isDeleted = true;
        this.dialogRef.close(this.result);
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close({ isDeleted: false });
  }

}
