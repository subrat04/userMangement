import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
// import {MatCardModule} from '@angular/material/card'
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { ApiServiceService } from './api-service.service';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { InfoComponent } from './info/info.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { RegisterfamilyinfoComponent } from './registerfamilyinfo/registerfamilyinfo.component';
import { AlldetailuserComponent } from './alldetailuser/alldetailuser.component';
import { FooterComponent } from './footer/footer.component';
import { HomebodyComponent } from './homebody/homebody.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
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
// import { WebdesigendevComponent } from './webdesigendev/webdesigendev.component';

// all packages import here 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    UsersComponent,
    EmployeeComponent,
    HomeComponent,
    RegisteremployeeComponent,
    UpdateEmployeeComponent,
    InfoComponent,
    UpdateuserComponent,
    RegisterfamilyinfoComponent,
    AlldetailuserComponent,
    FooterComponent,
    HomebodyComponent,
    HomeheaderComponent,
    ProfileComponent,
    AboutusComponent,
    ServicesComponent,
    CognizanceComponent,
    ChatwithusComponent,
    CyberspaceComponent,
    MobileappsComponent,
    PhpblogComponent,
    CustomsoftwaredevComponent,
    PhpdevlopmentblogComponent,
    SasdevlopmemtblogComponent,
    AndroiddevlopmentComponent,
    MobiledevlopmentComponent,
    IosDevlopmentComponent,
    WebdesigenComponent,
    ContentwritingComponent,
    DevopsserviceComponent,
    PhpdevComponent,
    SaasdevlopmentComponent,
    UiuxdesigenComponent,
    CloudsolutionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    FormsModule
  

  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
