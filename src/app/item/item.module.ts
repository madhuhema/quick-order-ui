import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateItemComponent } from './update-item/update-item.component';
import { ItemRoutingModule } from './item-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ItemComponent,
    CreateItemComponent,
    UpdateItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ItemRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
  ]
})
export class ItemModule { }
