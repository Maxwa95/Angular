import { Component, OnInit } from '@angular/core';
import { NeededProducts } from '../models/NeededProducts';
import { DataserviceService } from '../dataservice.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-need-product',
  templateUrl: './need-product.component.html',
  styleUrls: ['./need-product.component.scss']
})
export class NeedProductComponent implements OnInit {
  NeedProduct : NeededProducts = new NeededProducts()
  file : File 
  constructor(public data : DataserviceService,public cookie:CookieService) { }

  ngOnInit() {
  }

  fileUpload(event : FileList){
    this.file = event.item(0)
  }

  submit()
  {

  if (this.NeedProduct.FullName != "" && this.NeedProduct.TextResponce != "" && this.file != undefined) {
    console.log(this.NeedProduct)
    this.data.Needproduct(this.cookie.get("access_token"),this.NeedProduct,this.file).subscribe(
      a=>{
        alert("done")
      }
      ,
      err=>{
        alert(err)
      }
    )
    
  }

  }

}
