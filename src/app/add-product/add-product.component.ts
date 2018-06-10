import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CookieService } from 'ngx-cookie-service';
=======
import {productdesc}from '../models/productdesc'
>>>>>>> bba8c42bc21e5feadd5b4f74c26fa1176434eaef
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
<<<<<<< HEAD

  constructor(private cookieService : CookieService) { 
   if (this.cookieService.get("access_token") == null) {
    // force him to  go to login page here
   }


  }
=======
prod:productdesc=new productdesc()
  constructor() { }
>>>>>>> bba8c42bc21e5feadd5b4f74c26fa1176434eaef

  ngOnInit() {
  }

}
