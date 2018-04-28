import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageArchivedComponent } from './form/form.component';


import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatInputModule,
  MatSnackBarModule,
  MatProgressBarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import { ThankyouComponent } from './thankyou/thankyou.component';


@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    ThankyouComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressBarModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  entryComponents: [MessageArchivedComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
