import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatRegistrationComponent } from './creat-registration/creat-registration.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';

const routes: Routes = [

  {
    path:'', 
   redirectTo:'register',
   pathMatch:'full'
   
     },
     {
       path:'register',
       component:CreatRegistrationComponent
   },
   {
     path:'list',
     component:RegistrationListComponent
   
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
