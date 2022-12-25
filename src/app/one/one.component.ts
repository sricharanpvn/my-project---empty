import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  title = 'my-project';
  data: any;
  urldata: any;
  searchText= '';
  page:number = 1;
  count:number = 0;
  tableSize:number = 3;
  lat:string='16.55';
  lon:string='80.64';
  latlon={};
  countries:any;
  state:any;
  sample:any;
  sta:any;
  city:any;

  constructor( private service:ApiService) {}
  ngOnInit(){
    this.data=this.service.getdata().subscribe((d)=>{
      this.data=d;
    });

    this.urldata=this.service.geturldata(this.lat,this.lon).subscribe((ud)=>{
      this.urldata=ud;
    });

    this.countries=this.service.getCountries().subscribe(d=>{
      this.countries=d;
    });

    this.state=this.service.getStates().subscribe(s=>{
      this.state=s;
    });

  }

  onTableDataChange(event:any){
    this.page = event;
    this.data;
  }
  submit(f){
    document.getElementById('loading').style.display = 'inline-block';
    let lanlog = f.value;
    this.lat = lanlog.lat;
    this.lon = lanlog.lon;
    this.urldata=this.service.geturldata(this.lat,this.lon).subscribe((ud)=>{
      this.urldata=ud;
      setTimeout(document.getElementById('loading').style.display = 'none',5000);
    });
  }

  onChangeCountry(countryname){
    this.countries.data.forEach(s => {
      if(s.name==countryname){
        this.sta = s.states
      }
    });
  }
  onChangeState(statename){
    this.state.data.forEach(c => {
      if(c.name==statename){
        this.city = c.cities
        console.log(this.city)
      }
    });
  }

}
