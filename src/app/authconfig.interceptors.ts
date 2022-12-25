import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(private service:AuthService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const token = this.service.getToken();
    // req = req.clone({
    //   setHeaders:{
    //     Authorization: 'Bearer' + token
    //   }
    // })
    return next.handle(req)
  }

}
