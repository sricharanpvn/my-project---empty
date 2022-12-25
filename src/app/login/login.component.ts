import { SocialAuthService, GoogleLoginProvider, SocialUser, SocialLoginModule } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9@-_.]+$/)]],
    password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@-_.])[A-Za-z0-9@-_.]{6,}$')]]
  });


  get formcontrols(){
    return this.loginForm.controls;
  }

  constructor(private fb:FormBuilder, private router:Router, private authsService:AuthService,
    private socialAuthService: SocialAuthService, private authService: SocialAuthService){}

  submit(){
    let up=this.loginForm.value;
    this.username = up.username;
    this.password = up.password;
    // if(this.username===this.password){
    //   this.router.navigateByUrl('/dashboard');
    // }
    this.authsService.login(this.username,this.password)
    this.router.navigateByUrl('/dashboard')
  }

  // loginWithGoogle(): void {
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  //     .then(() => this.router.navigate(['mainpage']));
  // }

  user: SocialUser;
  loggedIn: boolean;

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.authsService.setAuthenticated(user != null);
      this.router.navigateByUrl('/dashboard')
    });
  }


}
