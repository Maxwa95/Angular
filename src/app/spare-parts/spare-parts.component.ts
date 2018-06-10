import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { product } from '../models/product';
import{Categoryandbrand} from '../models/cate_brand';
import { ActivatedRoute } from '@angular/router';
import { Cart } from "../cart.service";
<<<<<<< HEAD
import { NouisliderModule } from 'ng2-nouislider';
=======
// import { NouisliderModule } from 'ng2-nouislider';
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
// import { NouiFormatter } from "ng2-nouislider/src/nouislider";                           


@Component({
  selector: 'app-spare-parts',
  templateUrl: './spare-parts.component.html',
<<<<<<< HEAD
  styleUrls: ['./spare-parts.component.scss','../../assets/scss/general.scss']
=======
  styleUrls: ['./spare-parts.component.scss']
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
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
<<<<<<< HEAD
 public loading = false;
=======
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6

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
<<<<<<< HEAD
    this.loading = true;       
=======
    // document.getElementsByClassName('spareParts')[0].style.backgroundColor = "black"
   // document.getElementsByClassName('spareParts')[0].style.backgroundColor = "black"
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
    if(this.catKeywords.indexOf(item) == -1){
      this.catKeywords.push(item)
    }else {
      this.catKeywords.splice(this.catKeywords.indexOf(item),1)  
    }
    this.dataservice.filterByBrandAndCat(this.pagenumber, this.catKeywords, this.brandsname).subscribe(
      (a) => {
<<<<<<< HEAD
         this.loading = false;           
         this.prod =  a.json(); 
      },
      (error) => {
          this.loading = false;     
=======
         this.prod =  a.json(); 
        // document.getElementsByClassName('spareParts')[0].style.backgroundColor = "white"  
      //  document.getElementsByClassName('spareParts')[0].style.backgroundColor = "white"  
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
      }
    )
  }

  keyWordsBrand(item){
<<<<<<< HEAD
    this.loading = true;   
=======

>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
    if(this.brandsname.indexOf(item) == -1){
      this.brandsname.push(item)

    }else {
      this.brandsname.splice(this.brandsname.indexOf(item),1)   
    }
    this.dataservice.filterByBrandAndCat(this.pagenumber, this.catKeywords, this.brandsname).subscribe(
<<<<<<< HEAD
      (a) => {
        this.loading = false;    
        this.prod =  a.json()  
      },
      (error) => {
        this.loading = false;    
      }
=======
      (a) =>  this.prod =  a.json()
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
    )
  }
}


