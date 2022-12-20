import { Injectable, OnInit,  } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }
  getdata(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  // ngOnInit() {}

  geturldata(){
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
      'X-RapidAPI-Key': '336d5dc8f1msh09cc566d223625bp1b3311jsn81db56f507d3'
    });

    let lat:number;
    let lon:number;

    // const params = new HttpParams()
    // .set('lat', lat)
    // .set('lon',lon);

      const hostname = "https://weatherbit-v1-mashape.p.rapidapi.co";
      const path = "/forecast/3hourly?lat="+lat+"&lon="+lon;

    return this.http
      .get<any>(hostname+path,
      {
        headers: headers
      })
      // .subscribe(data => { // For Checking Data
      //   console.log(data);
      // });
  }

}
