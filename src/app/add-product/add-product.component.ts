import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private cookieService : CookieService) { 
   if (this.cookieService.get("access_token") == null) {
    // force him to  go to login page here
   }


  }

  ngOnInit() {
  }

}
