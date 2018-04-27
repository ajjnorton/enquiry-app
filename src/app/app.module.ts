import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatInputModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule, routableComponents } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    routableComponents
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
