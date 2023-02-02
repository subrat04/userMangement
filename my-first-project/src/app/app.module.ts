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
