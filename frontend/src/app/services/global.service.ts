import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface ApiResponse {
  id: number;
  name: string;
  age: number;
}
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private localJson1 = '/assets/json/data1.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.localJson1);
  }

  getCodeSnippet(learningSection: string, learningSubject: string): Observable<ApiResponse> {
    let urlToCodeSnippet: string = `./assets/json/learning/${learningSection}/${learningSubject}/snippets.json`;
    return this.http.get<ApiResponse>(urlToCodeSnippet);

  }

  getSnippets(): Observable<any> {
    return this.http.get('http://localhost:3000/snippets')
  }
}
