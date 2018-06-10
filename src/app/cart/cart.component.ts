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
  constructor(private cart : Cart) {
       this.cart.cart.subscribe(a=>this.allCarts = a);
     console.log(this.allCarts);
   }
ngOnInit() {
  
  }

  removeitem(pro : cart)
  {
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

}
