import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 constructor(private Ds : DataserviceService){

  this.Ds.setCart("Mahmoud")
 }
 ngOnInit()
{}

}
