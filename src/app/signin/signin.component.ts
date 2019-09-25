import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userForm = new FormGroup({
    emailFormControl: new FormControl('',[Validators.required, Validators.email]),
    passwordFormControl: new FormControl('',[Validators.required, Validators.min(6)])
  });
  constructor(private $userService: UsersService ) { }

  ngOnInit() {
  }

  createUser(){
    console.log(this.userForm.value);
  //  this.$userService.createUsers(this.userForm.value);
  }
  
}
