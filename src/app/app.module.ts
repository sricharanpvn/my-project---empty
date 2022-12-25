import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import { EditUpdateComponent } from './users/edit-update/edit-update.component';
import { OneComponent } from './one/one.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { AuthInterceptor } from './authconfig.interceptors';
import { AuthGuard } from './auth.guard';
import { GoogleLoginProvider,SocialLoginModule } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    EditUpdateComponent,
    OneComponent,
    LoginComponent,
    DashboardComponent,
    AboutusComponent,
    TwoComponent,
    ThreeComponent,
    WildcardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    UsersModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true, //keeps the user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '357710227201-j2clicf6r5hfkq8d3t9iu68v4huv3d6o.apps.googleusercontent.com'
            ), // your client id
          },
        ],
      },
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
