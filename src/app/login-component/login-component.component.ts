import { Component, OnInit } from '@angular/core';
import { LoginDetails} from './login-details'
import {  NgForm} from "@angular/forms";
import { RouterModule } from "@angular/router";
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor() { }
  model=new LoginDetails();
  onSubmit(loginDetail: NgForm){
    console.log(loginDetail.value)

    this.model.email = loginDetail.value.email;
    this.model.password = loginDetail.value.password;

    console.log(this.model.email)
    console.log(this.model.password)
    
  }
  ngOnInit() {
  }

}