import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-the-seller',
  templateUrl: './the-seller.component.html',
  styleUrls: ['./the-seller.component.scss']
})
export class TheSellerComponent implements OnInit {

  constructor(data : DataserviceService) {

    
   }

  ngOnInit() {

  }

}
