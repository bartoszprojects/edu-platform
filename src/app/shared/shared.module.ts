import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodeExampleComponent} from "./components/code-example/code-example.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {PipesModule} from "../pipes/pipes.module";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    CodeExampleComponent,
  ],
  exports: [
    CodeExampleComponent,
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    PipesModule,
    MatIconModule,
    MatTabsModule,
  ],

})
export class SharedModule {}
