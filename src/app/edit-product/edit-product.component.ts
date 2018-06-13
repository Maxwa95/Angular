import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service'
import {Category}from '../models/category';
import {brand}from '../models/brands';
import {model}from '../models/model';
import {productdesc}from '../models/productdesc';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  cates:Category[]=[];
  brands:brand[]=[];
  models:model[]=[]
  products:productdesc=new productdesc()
  // products;
  url = '';
  constructor(private http:DataserviceService, private cookieService : CookieService, private route:ActivatedRoute) { 
    this.url = this.route.snapshot.paramMap.get('id'); 
    this.http.getsingleprod(this.url).subscribe(
      (res) => {
        this.products = res.json()
        console.log(this.products);
        console.log(this.products.Description[0].PartNumber);
        
      },
      (error) => {
      }
    )
  } 

  ngOnInit() {
  this.http.GetCategories().subscribe(
      (a)=>{
        this.cates=a.json()
        console.log(this.cates);
      },
      (e)=>{
        alert(e),null
      }
    )
    this.http.GetBrands().subscribe(
      (a)=>{
        this.brands=a.json()
        console.log(this.brands);
      },
      (e)=>{
        alert(e),null
      }
    )
    this.http.GetModels().subscribe(
      (a)=>
      {
        this.models=a.json()
        console.log(this.models);        
      },
      (e)=>{
        alert(e),null
      }
    )

  }

}
