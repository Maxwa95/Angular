import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {productdesc}from '../models/productdesc'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  
  prod:productdesc=new productdesc()
  constructor(private cookieService : CookieService) { 
   if (this.cookieService.get("access_token") == null) {
    // force him to  go to login page here
   }


  }

  ngOnInit() {
  }

}
