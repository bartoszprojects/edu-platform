import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsComponent } from './basics/basics.component';
import { ErrorsComponent } from './errors/errors.component';
import { JavascriptComponent } from './javascript/javascript.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  { path: '', component: JavascriptComponent,
    children: [
      { path: 'errors', component: ErrorsComponent },
    ]
  }
];


@NgModule({
  declarations: [
    BasicsComponent,
    ErrorsComponent,
    JavascriptComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class JavascriptModule { }
