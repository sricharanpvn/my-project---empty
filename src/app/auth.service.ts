import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUserLoggedin: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  // Check whether the user is authenticated
  isAuthenticated(): boolean {
    return this.isUserLoggedin;
  }
  setAuthenticated(authenticated:boolean): void {
    this.isUserLoggedin=authenticated;
  }

  // Login using basic authentication with a username and password
  login(username: string, password: string): boolean {
    this.isUserLoggedin = false;
    if (username == 'rxdcQ@1' && password == 'rxdcQ@1') {
      this.isUserLoggedin = true;
    }
    return this.isUserLoggedin;
  }

  // Logout the user
  logout() {
    localStorage.removeItem('access_token');
  }
}


// import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { catchError, map, Observable, throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   endpoint:string = 'http://localhost:3000'
//   currentUser={}
//   headers = new HttpHeaders().set('Content-Type', 'application/json')
//   constructor(private http:HttpClient, private router:Router) { }

//   signUp(user){
//     return this.http.post(`${this.endpoint}/register-user`,user).pipe(catchError(this.handleError))
//   }

//   signIn(user){
//     return this.http.post(`${this.endpoint}/signin`,user).subscribe((res)=>{
//       // localStorage.setItem('access_tocken', res.token);
//       // this.getUserProfile(res.id).subscribe((res)=>{
//       //   this.currentUser = res;
//       //   this.router.navigate(['user-profile'+res.id])
//       // })
//     })
//   }

//   getToken(){
//     return localStorage.getItem('token')
//   }

//   get isLoggedin(){
//     let authTocken = localStorage.getItem('token')
//     return authTocken !== null ? true : false;
//   }

//   logout(){
//     let removeToken = localStorage.removeItem('token')
//     if(removeToken == null){
//       this.router.navigate(['login'])
//     }
//   }

//   getUserProfile(id:any):Observable<any>{
//     return this.http.get(`${this.endpoint}/user-profile/${id}`, {headers:this.headers}).pipe(
//       map((res)=>{
//         return res || {};
//       }),
//       catchError(this.handleError)
//     )
//   }

//   handleError(error:HttpErrorResponse){
//     let msg='';
//     if(error.error instanceof ErrorEvent){
//       msg = error.error.message;
//     }
//     else{
//       msg = `Error Code: ${error.status}\nMessage: ${error.message}`
//     }
//     return throwError(msg)
//   }


// }
