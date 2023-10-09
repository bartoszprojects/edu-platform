import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsComponent } from './signals/signals.component';
import { DetectionstrategyComponent } from './detectionstrategy/detectionstrategy.component';
import { NgzoneComponent } from './ngzone/ngzone.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { RouterModule, Routes } from "@angular/router";
import { AngularComponent } from './angular/angular.component';
import { BasicsComponent } from './basics/basics.component';

const routes: Routes = [
  { path: '', component: AngularComponent,
    children: [
      { path: 'basics', component: BasicsComponent },
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
    BasicsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AngularModule { }
