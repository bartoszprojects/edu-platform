import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypesComponent } from './types/types.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { GenericsComponent } from './generics/generics.component';
import { TypescriptComponent } from './typescript/typescript.component';
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes} from "@angular/router";
import { BasicsComponent } from './basics/basics.component';
import { MatExpansionModule } from "@angular/material/expansion";
import {AppModule} from "../../app.module";
import {PipesModule} from "../../pipes/pipes.module";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";

const routes: Routes = [
    { path: '', component: TypescriptComponent,
        children: [
            { path: 'basics', component: BasicsComponent },
            { path: 'generics', component: GenericsComponent },
            { path: 'interfaces', component: InterfacesComponent },
            { path: 'types', component: TypesComponent },
        ]
    }
];

@NgModule({
  declarations: [
    TypesComponent,
    InterfacesComponent,
    GenericsComponent,
    TypescriptComponent,
    BasicsComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    RouterModule.forChild(routes),
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    PipesModule
  ]
})
export class TypescriptModule { }
