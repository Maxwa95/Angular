import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { product } from '../models/product';
import{Categoryandbrand} from '../models/cate_brand';
import { ActivatedRoute } from '@angular/router';
import { Cart } from "../cart.service";
import { NouisliderModule } from 'ng2-nouislider';
// import { NouiFormatter } from "ng2-nouislider/src/nouislider";                           


@Component({
  selector: 'app-spare-parts',
  templateUrl: './spare-parts.component.html',
  styleUrls: ['./spare-parts.component.scss','../../assets/scss/general.scss']
})
export class SparePartsComponent implements OnInit {
 pagenumber : number = 1;
 prod : product[]=[];
 catKeywords = [];
 brandsname = [];
 url:string = ''
 test = '';

 public disabled: boolean = false;          
 public someValue: number = 550;
 public someMin: number = 500;
 public someMax: number = 5000;
 public someRange = [500 , 4000];
 public loading = false;

 catesandbrands:Categoryandbrand=new Categoryandbrand();
 currentRate = 3.5;
  constructor(public dataservice : DataserviceService,
     private route:ActivatedRoute,
    private cart:Cart
    ) 
  {

 
    this.url = this.route.snapshot.paramMap.get('name');
    if(this.url != undefined)
      {
        this.dataservice.filterSearchByName(this.pagenumber, this.url).subscribe(
         a=> this.prod =  a.json()
        )   
      }
      else
    this.dataservice.productsPaging(this.pagenumber).subscribe(
      (a)=>{
      this.prod =  a.json()
     
      } 
      )

      this.dataservice.getfilter().subscribe(
        (a)=>{
          console.log(a.json())
          this.catesandbrands=a.json();
        }
      )

    
  }

  ngOnInit() {
    
  }

  onChange(event){
    this.someRange[0] = event[0]
    this.someRange[1] = event[1]
    console.log(event);
  }

  keywords(item){
    this.loading = true;       
    if(this.catKeywords.indexOf(item) == -1){
      this.catKeywords.push(item)
    }else {
      this.catKeywords.splice(this.catKeywords.indexOf(item),1)  
    }
    this.dataservice.filterByBrandAndCat(this.pagenumber, this.catKeywords, this.brandsname).subscribe(
      (a) => {
         this.loading = false;           
         this.prod =  a.json(); 
      },
      (error) => {
          this.loading = false;     
      }
    )
  }

  keyWordsBrand(item){
    this.loading = true;   
    if(this.brandsname.indexOf(item) == -1){
      this.brandsname.push(item)

    }else {
      this.brandsname.splice(this.brandsname.indexOf(item),1)   
    }
    this.dataservice.filterByBrandAndCat(this.pagenumber, this.catKeywords, this.brandsname).subscribe(
      (a) => {
        this.loading = false;    
        this.prod =  a.json()  
      },
      (error) => {
        this.loading = false;    
      }
    )
  }
}


