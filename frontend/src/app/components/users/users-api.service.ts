import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../store/users/user.state";
import {getUserInterface} from "../../shared/interfaces/get.user.interface";
import {getSnippetCategory} from "../../shared/interfaces/get.snippets.categories.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  constructor(private http: HttpClient) { }
  url: string = 'http://localhost:3000/users'

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }

  getAllSnippetsCategoriesFromUser(userId: string | number): Observable<getSnippetCategory[]> {
    console.log('gfaggfaddgfdagfdagfdaa')
    return this.http.get<getSnippetCategory[]>('http://localhost:3000/snippets-categories/user/' + userId)
  }

  addUser(): Observable<User> {
    const payload = {
      username: "username1",
      password: "pass2",
      name: "name1",
      surname: "surname1",
      email: "email@email.com"
    }
    return this.http.post<User>(this.url, payload)
  }
}
