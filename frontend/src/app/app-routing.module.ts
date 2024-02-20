import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginRegisterComponent} from "./components/login-register/login-register.component";
import {LearningComponent} from "./learning/learning.component";
import {UsersComponent} from "./components/users/users.component";

const appRoutes: Routes = [
  { path: 'login', component: LoginRegisterComponent },
  { path: 'learning', component: LearningComponent },
  { path: 'users', component: UsersComponent },



];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
