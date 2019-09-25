import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  users = {} as Users;

  constructor(private $userService:UsersService) { }

  ngOnInit() {
  }

  createUser(users){
    this.$userService.signup(users);
    //console.log(data);
  }
}
