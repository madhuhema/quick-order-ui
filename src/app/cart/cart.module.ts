import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ItemListComponent } from '../_standalone/item-list/item-list.component';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    RouterModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    ItemListComponent
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
