import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable, of,BehaviorSubject } from 'rxjs';
import { Client } from './models/client';
import { seller } from './models/seller';
import { login } from './models/login';
import { ProductInfo } from './models/ProductInfo';
import { productdesc } from './models/productdesc';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class DataserviceService {

  carts = '';

  constructor(private http : Http, private cookieService : CookieService) { }
  

  // get single prod
  getsingleprod(id:string){
    return this.http.get('http://gearapi.azurewebsites.net/api/singleproduct/'+id)
  }
    
  //getfilterbybrandandcategory
  getfilter(){
    return this.http.get('http://gearapi.azurewebsites.net/api/getfilterdata')
  }

// Search
searchByKey(key){
  return this.http.get(`http://gearapi.azurewebsites.net/api/search/${key}`)
}

  //  Get Top Selling Products
  get_top_selling_products(){
    return this.http.get('http://gearapi.azurewebsites.net/api/ClientProducts');
  }

  productsPaging(num : number){
    return this.http.get('http://gearapi.azurewebsites.net/api/clientproducts/byname?pagenum='+num);
  }

  //  Get Recent Products
  recentProducts(){
    return this.http.get('http://gearapi.azurewebsites.net/api/clientProducts/last');
  }

// best offers
  bestOffers(){
    return this.http.get('http://gearapi.azurewebsites.net/api/clientProducts/offers')
  }

  registerclient(data:Client){
    let headers = new Headers();
    headers.append('Content-type','application/x-www-form-urlencoded'); 
    
    return this.http.post('http://gearapi.azurewebsites.net/api/Account/Register',data);
  }
  registerseller(data:seller){
    return this.http.post('http://gearapi.azurewebsites.net/api/Account/RegisterSeller',data);
  }

  login(data:string){
  //  let headers = new Headers();
  //  headers.append('Content-type','application/x-www-form-urlencoded'); 
    return this.http.post('http://gearapi.azurewebsites.net/token',data/*,{
      headers: headers
    }*/);
  }

  
  //  Add To Cart Functions
  setCart(item){
    this.carts = item
  }

  getCart(){
    return this.carts
  }


  //  Filter Function

  filterSearchByName(pnum:number=1, pname:string='*'){
    return this.http.get('http://gearapi.azurewebsites.net/api/clientproducts?pagenum='+pnum+'&name='+pname)
  }

  filterByBrandAndCat(pnum:number=1, cname, bname){
    if (cname.length == 0) {
      cname = "*";
    }else{
      cname = cname.join(",");
    }
    if(bname.length == 0){
      bname = "*";
    }else{
      bname = bname.join(",");
    }
    return this.http.get('http://gearapi.azurewebsites.net/api/filterclientproducts?pagenum='+pnum+'&catename='+cname+'&brandsname='+bname)
  }
  //selller infos
profileCompany(compid:number){
  return this.http.get('http://gearapi.azurewebsites.net/api/Seller/'+compid);
}
productsPerCompany(compid:number){
  return this.http.get('http://gearapi.azurewebsites.net/api/Seller/GetProducts/'+compid);
}
GetBrands()
{
  return this.http.get('http://gearapi.azurewebsites.net/api/Brands')
}

GetCategories()
{
  return this.http.get('http://gearapi.azurewebsites.net/api/categories')
}
GetModels()
{
  return this.http.get('http://gearapi.azurewebsites.net/api/models')
}
AddProduct(pro:productdesc,access_token : string)
{
  
     let headers = new Headers();
    headers.append('Authorization','Bearer '+access_token); 
    headers.append('Content-type','application/json');
  return this.http.post('http://gearapi.azurewebsites.net/api/seller/product',pro,{headers:headers});
}
EditProduct(pro:productdesc,access_token : string)
{
     let headers = new Headers();
   headers.append('Authorization','Bearer '+access_token);
   headers.append('Content-type','application/json');
  return this.http.put('http://gearapi.azurewebsites.net/api/seller/product',pro,{headers:headers});
}

Getusergrants(access_token : string)
{
  let headers = new Headers();
  headers.append('Authorization','Bearer '+access_token);
  return this.http.get('http://gearapi.azurewebsites.net/api/account/whoami',{headers:headers});
}

}


