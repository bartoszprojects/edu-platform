import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../store/users/user.state";
import {getUserInterface} from "../../shared/interfaces/get.user.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  url: string = 'http://localhost:3000/auth'


  login(payload: {username: string, password: string}): Observable<getUserInterface> {
    return this.http.post<getUserInterface>(this.url, payload)
  }
}
