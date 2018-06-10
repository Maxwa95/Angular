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
  constructor(private dataService : DataserviceService,private cookieService : CookieService) 
  {
  
  }

  ngOnInit() {

  }
  login()
  {
  let body =  "username=" + this.user.username + "&password="+this.user.password+"&grant_type=password";
  this.dataService.login(body).subscribe(
    a=>{
      
//access token assign it to what ever
this.cookieService.set( 'access_token', a.json().access_token);
 alert("Welcome user");
    },
    error => {

      alert(error);
    }
  )
  }

}
