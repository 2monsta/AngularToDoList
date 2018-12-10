import { Component, OnInit } from '@angular/core';
import { LoginDetails} from './login-details'
import {  NgForm} from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})

export class LoginComponentComponent implements OnInit {
  model = new LoginDetails();
  constructor(private http: HttpClient) { 

  }
  //TODO: need to make another class and use interface of the object.
  // sendDataToBackend():Observable<LoginComponentComponent>{
  //   console.log('==================')
  //   this.http.get<LoginComponentComponent>('http://localhost:3000/login').then((result) => {
  //     console.log('it is successful.')
  //   }).catch((err) => {
      
  //   });; 
  // }

  
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