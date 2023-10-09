import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {commonInterface1} from "../interfaces/common-interfaces";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getData(): Observable<commonInterface1[]> {
    return this.http.get<commonInterface1[]>('./assets/json/learning/common/common1.json');
  }

}
