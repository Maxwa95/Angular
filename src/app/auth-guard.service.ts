import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataserviceService } from './dataservice.service';
import { Router, CanActivate } from '@angular/router';
import { Observable, of,BehaviorSubject } from 'rxjs';
@Injectable()
export class AuthGuardService implements CanActivate {

  res : string = ""
  constructor(public router: Router,public cookie : CookieService,public data:DataserviceService) {
    this.Check();
  }

  canActivate(): Observable<boolean>|Promise<boolean>|boolean {
   
    if (this.res != "Seller") {
      this.router.navigate(['/login']);
     
      return false;
    }
    
    this.res = "";
    return true;
  }

  Check() {
   
this.data.Getusergrants(this.cookie.get("access_token")).subscribe(
a=>{
this.res = a.json().Type
console.log(this.res)
}
)
  }
}