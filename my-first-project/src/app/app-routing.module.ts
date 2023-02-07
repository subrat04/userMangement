import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UsersComponent } from './users/users.component';
import { InfoComponent } from './info/info.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AuthguardGuard } from './authguard.guard';
import { RegisterfamilyinfoComponent } from './registerfamilyinfo/registerfamilyinfo.component';
import { AlldetailuserComponent } from './alldetailuser/alldetailuser.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';



const routes: Routes = [
//   {
//   path-path of pages 
// component is pages
// },

{
  path:"",component:LoginComponent , 
},
{
  path:"signup",component:SignupComponent
},
{
  path:"navbar",component:NavbarComponent
},
{
 
  path:"userProfile",component:ProfileComponent
},
{
  path:"aboutus",component:AboutusComponent
},
{
  path:"users",canActivate:[AuthguardGuard] ,component:UsersComponent
},
{
  path:"updateUser/:id",canActivate:[AuthguardGuard],component:UpdateuserComponent 
},
{
  path:"registeruserInfo/:id",component:RegisterfamilyinfoComponent
},
{
 path:"allDetail/:id",component:AlldetailuserComponent
},
{
  path:"employee",canActivate:[AuthguardGuard],component:EmployeeComponent 
},
{
  path:"home",canActivate:[AuthguardGuard],component:HomeComponent 
},
{
  path:"registerEmployee",canActivate:[AuthguardGuard],component:RegisteremployeeComponent
},
{
  path:"updateEmployee/:id",canActivate:[AuthguardGuard],component:UpdateEmployeeComponent
},
{
  path:"help",canActivate:[AuthguardGuard],component:InfoComponent
},
{
  path:"footer",component:FooterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
