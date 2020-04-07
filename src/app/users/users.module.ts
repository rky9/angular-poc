import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users.component'
import { DataTablesModule } from 'angular-datatables';
import { UserService } from './user-service/user.service';
import { FormsModule } from '@angular/forms';

const userRoutes: Routes = [
  { path: '', component: UsersComponent }
]

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],
  providers: [UserService],
})
export class UsersModule { 
  constructor(){
    console.log("user us module")
  }
}
