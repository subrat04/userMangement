import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';



const routes: Routes = [
//   {
//   path-path of pages 
// component is pages
// },

{
  path:"",component:LoginComponent
},
{
  path:"signup",component:SignupComponent
},
{
  path:"navbar",component:NavbarComponent
},
{
  path:"users",component:UsersComponent
},
{
  path:"employee",component:EmployeeComponent
},
{
  path:"home",component:HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
