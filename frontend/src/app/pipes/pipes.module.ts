import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizePipe } from "./sanitize.pipe";

@NgModule({
  declarations: [SanitizePipe],
  exports: [
    SanitizePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
