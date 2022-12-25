import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:Users[]=[];


  usersForm:any = this.fb.group({
    // id:0,
    name:['',[Validators.required]],
    age:[,[Validators.required,Validators.max(100)]]
  });

  get formcontrols(){
    return this.usersForm.controls;
  }

  constructor(private fb:FormBuilder, private userservice:UsersService, private router:Router){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userservice.getAllUsers().subscribe((u)=>{
      this.users=u;
    })
  }

  addUser(){
    // if(this.usersForm.invalid) return;

    this.userservice.createUsers(this.usersForm.value)
    .subscribe(
      (data) => {
        this.getUsers();
      }
    )
  }


  // edit(id:number){
  //   this.router.navigate(['/users/edit/:'+id])
  // }

  delete(id:number){
    this.userservice.deletebyId(id).subscribe(()=>{
      this.users = this.users.filter(x => x.id !== id)
    })
  }

}
