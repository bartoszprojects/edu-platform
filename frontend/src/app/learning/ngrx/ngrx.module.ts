import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxComponent } from './ngrx/ngrx.component';
import { BasicsComponent } from './basics/basics.component';
import { AlltogetherComponent } from './alltogether/alltogether.component';
import { SelectorsComponent } from './selectors/selectors.component';
import { ReducerComponent } from './reducer/reducer.component';
import { EffectsComponent } from './effects/effects.component';
import { ActionsComponent } from './actions/actions.component';
import { OthersComponent } from './others/others.component';
import { GeneralComponent } from './general/general.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: NgrxComponent,
    children: [
      { path: 'basics', component: BasicsComponent },
      { path: 'general', component: GeneralComponent },
      { path: 'alltogether', component: AlltogetherComponent },
      { path: 'others', component: OthersComponent },
      { path: 'ngrx', component: NgrxComponent },
      { path: 'reducer', component: ReducerComponent },
      { path: 'selectors', component: SelectorsComponent },
      { path: 'actions', component: ActionsComponent },
      { path: 'effects', component: EffectsComponent },

    ]
  }
];

@NgModule({
  declarations: [
    NgrxComponent,
    BasicsComponent,
    AlltogetherComponent,
    SelectorsComponent,
    ReducerComponent,
    EffectsComponent,
    ActionsComponent,
    OthersComponent,
    GeneralComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NgrxModule { }
