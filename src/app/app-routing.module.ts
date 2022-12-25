import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OneComponent } from './one/one.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  // {path:'', redirectTo:'users/home', pathMatch:'full'},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'api', component:OneComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'two', component:TwoComponent},
  {path:'three', component:ThreeComponent},
  {path:'aboutus', component:AboutusComponent, canActivate:[AuthGuard]},
  {path:'**', component:WildcardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
