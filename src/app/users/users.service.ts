import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http:HttpClient) { }

  getAllUsers(){
    return this.http.get<Users[]>('http://localhost:3000/users');
  }

  createUsers(data:Users){
    return this.http.post<Users>('http://localhost:3000/users',data);
  }

  getUserbyId(id:number){
    return this.http.get<Users>('http://localhost:3000/users/'+id);
  }

  editupdate(data:Users){
    return this.http.put<Users>('http://localhost:3000/users/'+data.id,data)
  }

  deletebyId(id:number){
    return this.http.delete<Users>('http://localhost:3000/users/'+id);
  }

}
