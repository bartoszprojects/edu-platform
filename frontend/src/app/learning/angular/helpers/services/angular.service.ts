import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {myInterface1} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class AngularService {

  constructor(private http: HttpClient) { }

  getData(): Observable<myInterface1[]> {
    return this.http.get<myInterface1[]>(`./assets/json/data4.json`);
  }


}
