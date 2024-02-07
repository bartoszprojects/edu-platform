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
      name: "fromfrontend"
    }
    return this.http.post<User>(this.url, payload)
  }
}
