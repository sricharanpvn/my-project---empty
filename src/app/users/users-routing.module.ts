import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUpdateComponent } from './edit-update/edit-update.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {path:'users/home', component:HomeComponent},
  {path:'users/create', component:CreateComponent},
  {path:'users/edit/:id', component:EditUpdateComponent},
  {path:'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
