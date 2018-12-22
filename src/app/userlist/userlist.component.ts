import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

fetchDatas =[];
  constructor(private api:ApiserviceService) { 

this.onGetData();


  }
onGetData()
{  
  this.api.getDataServer().subscribe(
    (newData:any[])=>{console.log(newData);
    this.fetchDatas=newData},
    (error: any)=>console.log(error)
    

  );

}

  ngOnInit() {
  }

}

