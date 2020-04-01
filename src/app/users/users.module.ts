import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsersModule { 
  constructor(){
    console.log("User module loaded...")
  }
}
