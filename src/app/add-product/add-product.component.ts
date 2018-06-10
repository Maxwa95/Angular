import { Component, OnInit } from '@angular/core';
import {productdesc}from '../models/productdesc'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
prod:productdesc=new productdesc()
  constructor() { }

  ngOnInit() {
  }

}
