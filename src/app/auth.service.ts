import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataserviceService } from './dataservice.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  constructor(public jwtHelper: JwtHelperService,public cookie : CookieService,public data:DataserviceService) {}

  // ...
  public isAuthenticated(): boolean {
   
    let chk = this.cookie.get("access_token");
/*
    this.data.Getusergrants(chk).subscribe(
a=>
{
  console.log(a.json())
}

)*/

    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(chk);
  }

}