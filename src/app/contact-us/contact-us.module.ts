import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';

const routes: Routes = [
  {path:'contact', children:[
    {path:'',component:ContactUsComponent}
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContactUsModule { 
  constructor(){
    console.log("contact us module loaded...")
  }
}
