import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import { UserService } from '../services/user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router: Router , private userService : UserService) { }

  ngOnInit() {
  }
  login() : void {
    // if(this.username == 'admin' && this.password == 'admin'){
    //  this.router.navigate(['home']);
    // }else {
    //   alert('Invalid credentials');
    // }
    let userDetails:any = {};
    userDetails.username = this.username;
    userDetails.password = this.password;
    this.userService.validateUserDetails(userDetails).subscribe(response =>{
      if(response){
        this.router.navigate(['home']);
      }
      else {
          alert('Invalid credentials');
        }
    });
  }
}
