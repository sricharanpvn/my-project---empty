import { Component } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  data: any;
  urldata: any;
  // searchText: any;
  searchText= '';
  page:number = 1;
  count:number = 0;
  tableSize:number = 3;
  lat:number=35.5;
  lon:number=-78.5;

  constructor( private service:ApiService, private fb:FormBuilder) {}//
  ngOnInit(){
    this.data=this.service.getdata().subscribe((urldata)=>{
      this.data=urldata;
    });

    this.urldata=this.service.geturldata().subscribe((ud)=>{
      this.urldata=ud;
    });

    this.service.geturldata().
  }

  // latlondetails:any = this.fb.group({
  //   lat:[''],
  //   lon:['']
  // });

  onTableDataChange(event:any){
    this.page = event;
    this.data;
  }
  submit(){

  }
}
