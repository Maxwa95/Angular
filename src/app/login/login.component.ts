import { Component, OnInit } from '@angular/core';
import {login} from '../models/login';
import {DataserviceService} from '../dataservice.service';
import { error } from 'protractor';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','../../assets/scss/general.scss']
})
export class LoginComponent implements OnInit {
user : login = new login()
cookieValue = '';
<<<<<<< HEAD
public loading = false;
=======
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
  constructor(private dataService : DataserviceService,private cookieService : CookieService) 
  {
  
  }

  ngOnInit() {

  }
  login()
  {
<<<<<<< HEAD
  this.loading = true;  
  let body =  "username=" + this.user.username + "&password="+this.user.password+"&grant_type=password";
  this.dataService.login(body).subscribe(
    a=>{
      this.loading = false;
      //access token assign it to what ever
      this.cookieService.set( 'access_token', a.json().access_token);
      alert("Welcome user");
    },
    error => {
      this.loading = false;
      // alert(error);
=======
  let body =  "username=" + this.user.username + "&password="+this.user.password+"&grant_type=password";
  this.dataService.login(body).subscribe(
    a=>{
      
//access token assign it to what ever
this.cookieService.set( 'access_token', a.json().access_token);
 alert("Welcome user");
    },
    error => {

      alert(error);
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
    }
  )
  }

}
