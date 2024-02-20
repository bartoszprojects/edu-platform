import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../store/users/user.state";

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  constructor(private http: HttpClient) { }
  url: string = 'http://localhost:3000/users'

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }

  addUser(): Observable<User> {
    const payload = {
      name: "name1",
      password: "password1"
    }
    return this.http.post<User>(this.url, payload)
  }
}
