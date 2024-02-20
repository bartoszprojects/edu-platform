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
import { RegularsubjectComponent } from './subject/regularsubject/regularsubject.component';
import { BehavioursubjectComponent } from './subject/behavioursubject/behavioursubject.component';
import { ReplaysubjectComponent } from './subject/replaysubject/replaysubject.component';
import { AsyncsubjectComponent } from './subject/asyncsubject/asyncsubject.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {PipesModule} from "../../pipes/pipes.module";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PipesCompareComponent} from "./pipes/pipes-compare/pipes-compare.component";

const routes: Routes = [
  { path: '', component: RxjsComponent,
    children: [
      { path: 'basics', component: BasicsComponent },
      { path: 'observable', component: ObservableComponent },
      { path: 'subject', component: SubjectComponent , children: [
          { path: 'regularsubject', component: RegularsubjectComponent },
          { path: 'behavioursubject', component: BehavioursubjectComponent },
          { path: 'replaysubject', component: ReplaysubjectComponent },
          { path: 'asyncsubject', component: AsyncsubjectComponent },

        ]},
      { path: 'pipes', component: PipesComponent,  children: [
          { path: 'map', component: MapComponent },
          { path: 'pipes-compare', component: PipesCompareComponent },
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
    ExhaustmapComponent,
    RegularsubjectComponent,
    BehavioursubjectComponent,
    ReplaysubjectComponent,
    AsyncsubjectComponent,

  ],
  exports: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatExpansionModule,
    PipesModule,
    MatIconModule,
    MatTabsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RxjsModule { }
