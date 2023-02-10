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
import { ServicesComponent } from './services/services.component';
import { CognizanceComponent } from './cognizance/cognizance.component';
import { ChatwithusComponent } from './chatwithus/chatwithus.component';
import { CyberspaceComponent } from './cyberspace/cyberspace.component';
import { MobileappsComponent } from './mobileapps/mobileapps.component';
import { PhpblogComponent } from './phpblog/phpblog.component';
import { CustomsoftwaredevComponent } from './customsoftwaredev/customsoftwaredev.component';
import { PhpdevlopmentblogComponent } from './phpdevlopmentblog/phpdevlopmentblog.component';
import { SasdevlopmemtblogComponent } from './sasdevlopmemtblog/sasdevlopmemtblog.component';
import { AndroiddevlopmentComponent } from './androiddevlopment/androiddevlopment.component';
import { MobiledevlopmentComponent } from './mobiledevlopment/mobiledevlopment.component';
import { IosDevlopmentComponent } from './ios-devlopment/ios-devlopment.component';
import { WebdesigenComponent } from './webdesigen/webdesigen.component';
import { ContentwritingComponent } from './contentwriting/contentwriting.component';
import { DevopsserviceComponent } from './devopsservice/devopsservice.component';
import { PhpdevComponent } from './phpdev/phpdev.component';
import { SaasdevlopmentComponent } from './saasdevlopment/saasdevlopment.component';
import { UiuxdesigenComponent } from './uiuxdesigen/uiuxdesigen.component';
import { CloudsolutionComponent } from './cloudsolution/cloudsolution.component';
// import { WebdesigendevComponent } from '.webdesigendev/webdesigendev.component';


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
  path:"services",component:ServicesComponent
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
  path:"cognizance",component:CognizanceComponent
},
{
  path:"registerEmployee",canActivate:[AuthguardGuard],component:RegisteremployeeComponent
},
{
  path:"updateEmployee/:id",canActivate:[AuthguardGuard],component:UpdateEmployeeComponent
},
{
  path:"chatWithUs",component:ChatwithusComponent
},
{
  path:"help",canActivate:[AuthguardGuard],component:InfoComponent
},
{
  path:"footer",component:FooterComponent
},
{
  path:"cyberspace",component:CyberspaceComponent
},
{
path:"grow-your-business-with-custom-mobile-apps",component:MobileappsComponent
},
{
  path:"benefits-of-PHP-in-web-development",component:PhpblogComponent
},
{
path:"custom-software-development-to-expand-your-business",component:CustomsoftwaredevComponent
}
,{
  path:"choose-right-php-development-company",component:PhpdevlopmentblogComponent
},
{
  path:"saas-application-development",component:SasdevlopmemtblogComponent
},
{
  path:"android-app-development",component:AndroiddevlopmentComponent
},
{
  path:"mobile-app-development",component:MobiledevlopmentComponent
}
,{
  path:"ios-app-development",component:IosDevlopmentComponent
},
{
  path:"web-design",component:WebdesigenComponent
},
{
  path:"content-writing",component:ContentwritingComponent
},
{
  path:"devops-service",component:DevopsserviceComponent
}
,{
  path:"php-web-development",component:PhpdevComponent
},
{
  path:"saas-development",component:SaasdevlopmentComponent
},
{
  path:"ui-ux-design",component:UiuxdesigenComponent
},
{
  path:"cloud-solutions",component:CloudsolutionComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
