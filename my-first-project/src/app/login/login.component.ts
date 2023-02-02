import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
// import {userRegister} from "../api-service.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // template: `...`
})
export class LoginComponent implements OnInit{
  submitted:boolean = false;
  errormsg: any;
  userForm : FormGroup | undefined
  showPassword:boolean=false
  password:any
  constructor(private user: ApiServiceService, private router: Router) {}
  loginuser = new FormGroup({
    userId: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  get f() {return this.loginuser.controls;}
  // addUser(formValues:any) {
  //   this.apiService.addUser(formValues)
  // }
  ngOnInit(): void {}
  loginUsers() {
    console.log(this.loginuser.value);
    this.submitted = true;
    if(this.loginuser.invalid) {
      this.errormsg = 'all fields required'
    }
    this.user.loginUsers(this.loginuser.value).subscribe((res: any) => {
      if (res.length != 0) {
        console.log('res is', res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('userId', res.userid);
        localStorage.setItem('level',res.level)
        Swal.fire({
          title: 'Login Alert',
          text: res.message,
          timer: 1500,
        });
        this.router.navigate(['/home']);
      }
    },error=>{
      console.log('error')
      Swal.fire({
        title: 'Login Alert',
        text: 'User Not Found',
        timer: 1500,
      });

    });
    
    
  }
  redirect() {
    this.router.navigate(['/signup']);
  }
}
