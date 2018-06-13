import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service'
import { ActivatedRoute } from '@angular/router';
import{ProductInfo} from '../models/ProductInfo';
import { Cart } from '../cart.service'
import { cart } from '../models/cart';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
   url :string ;
   carts = [];
   singleCart: cart = new cart();
   getprod: ProductInfo=new ProductInfo();
   public loading = false;
   
  constructor(private http:DataserviceService,private route:ActivatedRoute, private cartHttp:Cart) { 
    this.url = this.route.snapshot.paramMap.get('id'); 
    console.log(this.url);
    
    this.http.getsingleprod(this.url).subscribe(
      (a)=>{
        this.getprod=a.json()
      console.log(this.getprod);
      
      }
    ) 
        
     }

  ngOnInit() {
    console.log(this.url);
    
  }
 
  //  Add To Cart
  addToCart(){
    this.loading = true;    
    this.singleCart.product = this.getprod.product;
    this.cartHttp.addtocart(this.singleCart);
    setTimeout(()=>{
      this.loading = false;          
      window.location.replace("../cart")
    },2000)
  }

}
