import { Component, OnInit } from '@angular/core';
import {  DataserviceService} from "../dataservice.service";

@Component({
  selector: 'app-the-seller',
  templateUrl: './the-seller.component.html',
  styleUrls: ['./the-seller.component.scss']
})
export class TheSellerComponent implements OnInit {
  public product = new Array<object>();
  constructor(private Data : DataserviceService) { 
    this.Data.productsPerCompany(2).subscribe(
      res => this.product.push(res.json())
      
    )    
  }

  ngOnInit() {
    console.log(this.product);
  }

}


