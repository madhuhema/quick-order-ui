import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'qo-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLoginDialog() {
    const dialogRefernce = this.dialog.open(LoginComponent);
    // dialogRefernce.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  openRegisterDialog() {
    const dialogRefernce = this.dialog.open(RegisterComponent);
    // dialogRefernce.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
