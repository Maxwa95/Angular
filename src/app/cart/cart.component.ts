import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart.service'
import { cart } from '../models/cart';
import { product } from '../models/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  allCarts:cart[] = [];
  allCartsdata:cart[] = [];
<<<<<<< HEAD
  public loading = false;
  
=======
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
  constructor(private cart : Cart) {
       this.cart.cart.subscribe(a=>this.allCarts = a);
     console.log(this.allCarts);
   }
ngOnInit() {
  
  }

  removeitem(pro : cart)
  {
<<<<<<< HEAD
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
  }
=======
    this.cart.removefromcart(pro);
    this.cart.cart.subscribe(a=>this.allCarts = a);
  }
  edititem(pro : cart)
  {
    let p = pro;
    p.quantity +=1;
    this.cart.removefromcart(pro);
    this.cart.cart.subscribe(a=>this.allCarts = a);
  }

>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
}
