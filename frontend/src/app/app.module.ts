import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FunctionsModule } from "./learning/functions/functions.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {PipesModule} from "./pipes/pipes.module";
import {TypescriptModule} from "./learning/typescript/typescript.module";
import { StoreModule } from '@ngrx/store';
import {counterReducer, usersReducer} from "./store/core.reducers";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    PipesModule,
    TypescriptModule,
    FunctionsModule,
    StoreModule.forRoot({count: counterReducer, users: usersReducer}, {}),
    FormsModule

  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
