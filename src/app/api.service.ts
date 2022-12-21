import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }
  getdata(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  geturldata(lat:string,lon:string){
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
      // 'X-RapidAPI-Key': '7e2b83e7bbmsh8d37f1dd1b2a77ap1adeeejsnb9a9fdacef60'
      'X-RapidAPI-Key': '336d5dc8f1msh09cc566d223625bp1b3311jsn81db56f507d3'
    });

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

  // private url = './assets/countries.json'
  // getCount() {
  //   return this.http.get(this.url+'country:Afghanistan');
  // }

  // getCities(countryId: string) {
  //   return this.http.get('https://countriesnow.space/api/v0.1/countries/'+'/cities?country='+countryId);
  // }

  getCountries():Observable<any>{
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'world-country.p.rapidapi.com',
      'X-RapidAPI-Key': '7e2b83e7bbmsh8d37f1dd1b2a77ap1adeeejsnb9a9fdacef60'
    });

      const hostname = "https://world-country.p.rapidapi.com";
      const path = "/get/countries?page=1&perpage=200";

    return this.http
      .get<any>(hostname+path,
      {
        headers: headers
      })
  }
  getStates():Observable<any>{
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'world-country.p.rapidapi.com',
      'X-RapidAPI-Key': '7e2b83e7bbmsh8d37f1dd1b2a77ap1adeeejsnb9a9fdacef60'
    });

      const hostname = "https://world-country.p.rapidapi.com";
      const path = "/get/states?page=1&perpage=200";

    return this.http
      .get<any>(hostname+path,
      {
        headers: headers
      })
  }
}
