import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs/rxjs.component';
import {RouterModule, Routes} from "@angular/router";
import {BasicsComponent} from "./basics/basics.component";
import { SubjectComponent } from './subject/subject.component';
import { ObservableComponent } from './observable/observable.component';
import { PipesComponent } from './pipes/pipes.component';
import { MapComponent } from './pipes/map/map.component';
import { SwitchmapComponent } from './pipes/switchmap/switchmap.component';
import { MergemapComponent } from './pipes/mergemap/mergemap.component';
import { WithlatestfromComponent } from './pipes/withlatestfrom/withlatestfrom.component';
import { CombineallComponent } from './pipes/combineall/combineall.component';
import { CombinelatestComponent } from './pipes/combinelatest/combinelatest.component';
import { ZipComponent } from './pipes/zip/zip.component';
import { ConcatmapComponent } from './pipes/concatmap/concatmap.component';
import { ExhaustmapComponent } from './pipes/exhaustmap/exhaustmap.component';


const routes: Routes = [
  { path: '', component: RxjsComponent,
    children: [
      { path: 'basics', component: BasicsComponent },
      { path: 'observable', component: ObservableComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'pipes', component: PipesComponent,  children: [
          { path: 'map', component: MapComponent },
          { path: 'mergemap', component: MergemapComponent },
          { path: 'switchmap', component: SwitchmapComponent },
          { path: 'concatmap', component: ConcatmapComponent },
          { path: 'exhaustmap', component: ExhaustmapComponent },
          { path: 'combinelatest', component: CombinelatestComponent },
          { path: 'combineall', component: CombineallComponent },
          { path: 'withlatestfrom', component: WithlatestfromComponent },
          { path: 'zip', component: ZipComponent },
        ] },

    ]
  }
];

@NgModule({
  declarations: [
    BasicsComponent,
    RxjsComponent,
    SubjectComponent,
    ObservableComponent,
    PipesComponent,
    MapComponent,
    SwitchmapComponent,
    MergemapComponent,
    WithlatestfromComponent,
    CombineallComponent,
    CombinelatestComponent,
    ZipComponent,
    ConcatmapComponent,
    ExhaustmapComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RxjsModule { }
