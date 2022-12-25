import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-update',
  templateUrl: './edit-update.component.html',
  styleUrls: ['./edit-update.component.css']
})
export class EditUpdateComponent implements OnInit {

  // usersForm:any = this.fb.group({
  //   // id:0,
  //   name:[''],
  //   age:[]
  // });

  usersForm: Users = {
    id: 0,
    name: '',
    age: 0
  };


  constructor(private fb:FormBuilder, private userservice:UsersService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((p)=>{
      let id = Number(p.get('id'));
      this.getDataById(id);
    })
  }

  getDataById(id:number){
    this.userservice.getUserbyId(id).subscribe((d)=>{
      this.usersForm=d;
    })

  }

  editupdate(){
    this.userservice.editupdate(this.usersForm).subscribe({
      next:(data) => {
        this.router.navigate(["/users/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

  back(){
    this.router.navigate(["/users/home"]);
  }

}
