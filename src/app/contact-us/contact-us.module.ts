import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactUsComponent} from './contact-us.component'
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const contactRoutes:Routes=[
  {path:'', component:ContactUsComponent}
  ]

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(contactRoutes)

  ]
})
export class ContactUsModule { 
  constructor(){
    console.log("contact us module")
  }
}
