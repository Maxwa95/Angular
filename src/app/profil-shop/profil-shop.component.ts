import { Component, OnInit } from '@angular/core';

import { DataserviceService } from '../dataservice.service';
import { company } from '../models/company';
import { ActivatedRoute } from '@angular/router';
import { product } from '../models/product';

@Component({
  selector: 'app-profil-shop',
  templateUrl: './profil-shop.component.html',
  styleUrls: ['./profil-shop.component.scss']
})
export class ProfilShopComponent implements OnInit {
 public companyId : number =2;
 public companyProfile :company = new company();
 public productlst : product [] ;
  constructor(public dataservice : DataserviceService, private route:ActivatedRoute) 
  {
    this.dataservice.profileCompany(this.companyId).subscribe(
      (a)=>{
<<<<<<< HEAD
      this.companyProfile =  a.json();
      console.log(this.companyProfile);
=======
      this.companyProfile =  a.json()
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
      } 
      )
      this.dataservice.productsPerCompany(this.companyId).subscribe(
        (a)=>{
        this.productlst =  a.json()
        } 
        )
  }

  ngOnInit() {
   
    
  }
}
