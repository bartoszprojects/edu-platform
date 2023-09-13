import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationalFunctionsComponent } from './operational-functions/operational-functions.component';
import { GeneratorsFunctionsComponent } from './generators-functions/generators-functions.component';
import { CurryingFunctionsComponent } from './currying-functions/currying-functions.component';
import { PolimorphismFunctionsComponent } from './polimorphism-functions/polimorphism-functions.component';
import { HigherOrderFunctionsComponent } from './higher-order-functions/higher-order-functions.component';
import { CallbackFunctionsComponent } from './callback-functions/callback-functions.component';
import { CompositionsFunctionsComponent } from './compositions-functions/compositions-functions.component';
import { RecursionFunctionsComponent } from './recursion-functions/recursion-functions.component';
import { FunctionsComponent } from './functions/functions.component';
import {RouterModule, Routes} from "@angular/router";
import {MatExpansionModule} from "@angular/material/expansion";
import {SnippetDirective} from "../../directives/snippet.directive";
import {ConverterDirective} from "../../directives/converter.directive";
import { BasicsComponent } from './basics/basics.component';
import {PipesModule} from "../../pipes/pipes.module";

const routes: Routes = [
  { path: '', component: FunctionsComponent,
  children: [
      { path: 'basics', component: BasicsComponent },
      { path: 'callbacks', component: CallbackFunctionsComponent },
      { path: 'compositions', component: CompositionsFunctionsComponent },
      { path: 'curryings', component: CurryingFunctionsComponent },
      { path: 'generators', component: GeneratorsFunctionsComponent },
      { path: 'higherorders', component: HigherOrderFunctionsComponent },
      { path: 'operationals', component: OperationalFunctionsComponent },
      { path: 'polimorphisms', component: PolimorphismFunctionsComponent },
      { path: 'recursions', component: RecursionFunctionsComponent },
    ]
  }
];

@NgModule({
    declarations: [
        OperationalFunctionsComponent,
        GeneratorsFunctionsComponent,
        CurryingFunctionsComponent,
        PolimorphismFunctionsComponent,
        HigherOrderFunctionsComponent,
        CallbackFunctionsComponent,
        CompositionsFunctionsComponent,
        RecursionFunctionsComponent,
        FunctionsComponent,
        SnippetDirective,
        ConverterDirective,
        BasicsComponent
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatExpansionModule,
        PipesModule
    ]
})
export class FunctionsModule { }
