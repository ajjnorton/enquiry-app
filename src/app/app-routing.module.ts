import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent,  MessageArchivedComponent } from './form/form.component';
import { ThankyouComponent } from './thankyou/thankyou.component';


const ROUTES = [
  { path: 'enquiry', component:  FormComponent },
  { path: 'thankyou', component:  ThankyouComponent },
  { path: '', redirectTo: 'enquiry', pathMatch: 'full' },
  { path: '**', redirectTo: 'enquiry', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  FormComponent,
  MessageArchivedComponent
];
