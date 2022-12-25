import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router:Router, private socialAuthService: SocialAuthService){}

  sas = this.socialAuthService;
  logout(){
    this.router.navigateByUrl('/login');
  }

}
