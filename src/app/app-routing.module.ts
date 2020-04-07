import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'', redirectTo:'users', pathMatch:'full'},
  {path:'users', loadChildren: () => import('./users/users.module').then(u => u.UsersModule)},
  {path:'contact', loadChildren: () => import('./contact-us/contact-us.module').then(c => c.ContactUsModule)},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
