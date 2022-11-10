import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'qo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private api: UserService, private dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  onSubmit() {
    //validate form before submitting
    console.log("Form values", this.loginForm.value);
    // this.api.get().subscribe();
  }
  onCancel(): void {
    this.dialogRef.close();
  }

}
