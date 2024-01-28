import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {InterfaceGenerics1, InterfaceGenerics2} from "../interfaces/interfaces"; // Import the HttpClient module

@Injectable({
  providedIn: 'root'
})
export class TypescriptService {

  constructor(private http: HttpClient) { }

  getData(id: number): Observable<InterfaceGenerics1> {
    return this.http.get<InterfaceGenerics1>(`./assets/json/learning/typescript/types/generics/data${id}.json`);
  }

  getData2(): Observable<InterfaceGenerics2[]> {
    return this.http.get<InterfaceGenerics2[]>(`./assets/json/learning/typescript/types/generics/genericsMixedTogether1.json`);
  }

}
