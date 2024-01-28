import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsComponent } from './signals/signals.component';
import { DetectionstrategyComponent } from './detectionstrategy/detectionstrategy.component';
import { NgzoneComponent } from './ngzone/ngzone.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { RouterModule, Routes } from "@angular/router";
import { AngularComponent } from './angular/angular.component';
import { BasicsComponent } from './basics/basics.component';
import { DirectivesComponent } from './directives/directives.component';
import { BasicDirective } from './directives/directives/basic.directive';
import { Basic2Directive } from './directives/directives/basic2.directive';
import { Basic3Directive } from './directives/directives/basic3.directive';
import { Basic4Directive } from './directives/directives/basic4.directive';
import { Basic5Directive } from './directives/directives/basic5.directive';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
  { path: '', component: AngularComponent,
    children: [
      { path: 'basics', component: BasicsComponent },
      { path: 'directives', component: DirectivesComponent },
      { path: 'signals', component: SignalsComponent },
      { path: 'ngzone', component: NgzoneComponent },
      { path: 'lifecyclehooks', component: LifecyclehooksComponent },
      { path: 'detectionstrategy', component: DetectionstrategyComponent },
    ]
  }
];

@NgModule({
  declarations: [
    SignalsComponent,
    DetectionstrategyComponent,
    NgzoneComponent,
    LifecyclehooksComponent,
    AngularComponent,
    BasicsComponent,
    DirectivesComponent,
    BasicDirective,
    Basic2Directive,
    Basic3Directive,
    Basic4Directive,
    Basic5Directive,
    SharedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)]
})
export class AngularModule { }
