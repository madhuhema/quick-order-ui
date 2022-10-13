import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
