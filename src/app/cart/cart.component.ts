import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart.service'
import { cart } from '../models/cart';
import { product } from '../models/product';
import { checkout } from '../models/checkout';
import { DataserviceService } from '../dataservice.service';
import { CookieService } from 'ngx-cookie-service';
import { ClientService } from '../client-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  allCarts:cart[] = [];
  allCartsdata:cart[] = [];
  chkout : checkout = new checkout()

  public loading = false;
  
  constructor(private cart : Cart,private data:DataserviceService,private cookie:CookieService,public auth:ClientService,public route:Router) {
       this.cart.cart.subscribe(a=>this.allCarts = a);
       this.chkout = this.cart.checkout()
     console.log(this.allCarts);
   }
ngOnInit() {
  
  }

  removeitem(pro : cart)
  {
    this.loading = true
    this.cart.removefromcart(pro);
    this.cart.cart.subscribe(
      (a)=> {
        this.loading = false        
        this.allCarts = a
      },
      (error) => {
        this.loading = false        
      }
    )
    this.chkout = this.cart.checkout()
  }
  edititem(pro : cart){
    this.loading = true
    let p = pro;
    p.quantity +=1;
    this.cart.removefromcart(pro);
    this.cart.cart.subscribe(
      (a)=>{
        this.loading = false;
        this.allCarts = a
      },
      (error) => {
        this.loading = false
      }
    )
    this.chkout = this.cart.checkout()
  }

  confirmOrder(){

    this.auth.canActivate().then(
      a=>{
if (a) {
  this.data.confirmOrder(this.cookie.get("access_token"),this.cart.checkout()).subscribe(

    a=>{

     


    }
    
  )
}

}
    ).catch(
      e=>alert(e)
    )
  }
}
