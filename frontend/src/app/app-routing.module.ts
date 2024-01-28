import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

const appRoutes: Routes = [
  { path: 'javascript', loadChildren: () => import('./learning/javascript/javascript.module').then(m => m.JavascriptModule) },
  { path: 'angular', loadChildren: () => import('./learning/angular/angular.module').then(m => m.AngularModule) },
  { path: 'functions', loadChildren: () => import('./learning/functions/functions.module').then(m => m.FunctionsModule) },
  { path: 'typescript', loadChildren: () => import('./learning/typescript/typescript.module').then(m => m.TypescriptModule) },
  { path: 'rxjs', loadChildren: () => import('./learning/rxjs/rxjs.module').then(m => m.RxjsModule) },
  { path: 'ngrx', loadChildren: () => import('./learning/ngrx/ngrx.module').then(m => m.NgrxModule) },

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
