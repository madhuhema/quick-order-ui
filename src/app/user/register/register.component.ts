import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { Role } from 'src/app/_models/User';

@Component({
  selector: 'qo-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  roles = Object.values(Role);
  constructor(private api: UserService, private dialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  })

  onSubmit() {
    console.log("From register", this.registerForm.value)
  }

  onCancel() {
    this.dialogRef.close();
  }

}
