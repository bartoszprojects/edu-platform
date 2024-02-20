import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LearningComponent} from "./learning.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [

  { path: '', component: LearningComponent },
  { path: 'javascript', loadChildren: () => import('./javascript/javascript.module').then(m => m.JavascriptModule) },
  { path: 'angular', loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule) },
  { path: 'functions', loadChildren: () => import('./functions/functions.module').then(m => m.FunctionsModule) },
  { path: 'typescript', loadChildren: () => import('./typescript/typescript.module').then(m => m.TypescriptModule) },
  { path: 'rxjs', loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule) },
  { path: 'ngrx', loadChildren: () => import('./ngrx/ngrx.module').then(m => m.NgrxModule) }

]
@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule,
    LearningComponent
  ]
})
export class LearningModule {
}
