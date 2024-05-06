import { Injectable } from '@angular/core';
import { User } from 'src/app/_model/User';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  user!:User;
  data!:any;

  constructor() { }

  saveSession(user: User) {
    window.localStorage.removeItem("login");
    window.localStorage.setItem("login", JSON.stringify(user));
  }
// lấy session
  getSession() {
    this.data = localStorage.getItem("login");
    return JSON.parse(this.data);
  }
//deletesession
  deleteSession() {
    window.localStorage.removeItem("login");
  }
}
