import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {productdesc}from '../models/productdesc';
import {  DataserviceService} from "../dataservice.service";
import {Category}from '../models/category';
import {brand}from '../models/brands';
import {model}from '../models/model';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  cates:Category[]=[];
  brands:brand[]=[];
  models:model[]=[]
  
  prod:productdesc=new productdesc()
  constructor(private cookieService : CookieService,private Data : DataserviceService) { 
   if (this.cookieService.get("access_token") == null) {
    // force him to  go to login page here
   }


  }

  ngOnInit() {
    this.Data.GetCategories().subscribe(
      a=>this.cates=a.json(),e=>alert(e),null
    )
    this.Data.GetBrands().subscribe(
      a=>this.brands=a.json(),e=>alert(e),null
    )
    this.Data.GetModels().subscribe(
      a=>this.models=a.json(),e=>alert(e),null
    )

  }

}
