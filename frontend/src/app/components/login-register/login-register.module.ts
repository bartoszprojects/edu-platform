import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from "../users/users.component";
import {LoginRegisterComponent} from "./login-register.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRegisterComponent,
  ]
})
export class LoginRegisterModule { }
