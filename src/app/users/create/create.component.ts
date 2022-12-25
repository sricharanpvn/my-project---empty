import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  usersForm:any = this.fb.group({
    // id:0,
    name:[''],
    age:[]
  });

  constructor(private fb:FormBuilder, private userservice:UsersService, private router:Router){}

  addUser(){
    this.userservice.createUsers(this.usersForm.value)
    .subscribe(
      (data) => {
        this.router.navigateByUrl('/users/home')
      }
    )
  }

  back(){
    this.router.navigate(["/users/home"]);
  }

}
