import { Component, OnInit } from '@angular/core';
import{FormsService} from '../../forms.service'
import{Client} from'../../models/client'
import {DataserviceService} from '../../dataservice.service';
import{seller} from'../../models/seller'
@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
<<<<<<< HEAD
  styleUrls: ['./step1.component.scss', '../../../assets/scss/general.scss']
=======
  styleUrls: ['./step1.component.scss']
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
})
export class Step1Component implements OnInit {
public client=new Client();
public seller:seller=new seller();
<<<<<<< HEAD
public loading = false;
=======
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
companyStatus:Boolean=false;
  constructor(private form: FormsService,private dataService : DataserviceService) { 
    this.form.clientform.subscribe(a=>this.client=a);
  }

  ngOnInit() {
    if(this.companyStatus==true){

    }
  }
  
  register(){
    this.dataService.registerclient(this.client).subscribe(

<<<<<<< HEAD
      res => {
        this.loading = true;           
      },error=>alert(error)
=======
      null,error=>alert(error)
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
    );

   };
   
   addcompany(){
<<<<<<< HEAD

=======
    
  
    
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
      this.seller.city=this.client.city;
      this.seller.ConfirmPassword=this.client.ConfirmPassword;
      this.seller.Email=this.client.Email;
      this.seller.FirstName=this.client.FirstName;
      this.seller.LastName=this.client.LastName;
     this.seller.Password=this.client.Password;
    this.seller.PhoneNumber=this.client.PhoneNumber;

   
  }
   
   registerseller11():void{
<<<<<<< HEAD
    this.loading = true; 
    if(this.companyStatus == false){
      this.dataService.registerclient(this.client).subscribe(
                res=>{
                  this.loading = false;   
                }
               ,
               error=>{
                 this.loading = false;     
                 alert(error)
                },
=======
    if(this.companyStatus == false){
      this.dataService.registerclient(this.client).subscribe(
               null,
               error=>alert(error),
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
               null
       ) }
       else{
        
     console.log(this.seller);
     this.dataService.registerseller(this.seller).subscribe(
<<<<<<< HEAD

       res => {
        this.loading = true;            
       },
       e=>{
        this.loading = false;            
       }
     ) 
=======
       null,e=>console.log(e)
     )
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
   }
  }


  }