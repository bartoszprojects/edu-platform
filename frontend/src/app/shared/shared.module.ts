import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodeExampleComponent} from "./components/code-example/code-example.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {PipesModule} from "../pipes/pipes.module";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {
  ConcatmapInteractive1Component
} from "../learning/rxjs/pipes/concatmap/interactives/concatmap-interactive1/concatmap-interactive1.component";
import {SnippetTileActiveDirective} from "./directives/snippet-tile-active.directive";

@NgModule({
  declarations: [
    CodeExampleComponent,
    ConcatmapInteractive1Component,
    SnippetTileActiveDirective
  ],
  exports: [
    CodeExampleComponent,
    SnippetTileActiveDirective,
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
