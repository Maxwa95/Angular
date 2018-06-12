import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {
    this.canActivate()
  }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
<<<<<<< HEAD
      this.router.navigate(['/login']);
      console.log("From Auth gurad");
      
=======
      this.router.navigate(['login']);
      alert("You are not authinticated");
>>>>>>> ca8cf6027df182957c61905772baa519cb5e9a5c
      return false;
    }
    return true;
  }

}
