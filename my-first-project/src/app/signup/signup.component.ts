import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  submitted:boolean = false;
  errormsg: any;
  userForm : FormGroup | undefined
  showPassword:boolean=false
  password:any
  constructor(private user:ApiServiceService,private router:Router) {}
  
  adduser= new FormGroup({
    Name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    userId:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })
  
 get f() {return this.adduser.controls;}

  
  ngOnInit(): void {
   
  }
  registerUser(){
      console.log(this.adduser.value)
    this.submitted = true;
    if(this.adduser.invalid) {
      this.errormsg = 'all fields required'
    }
    this.user.addUser(this.adduser.value).subscribe((res)=>{
      //alert section 
      if(res) {
        Swal.fire({
          title:'Registered Alert',
          text:'User Registered Successfully',
          timer:1500
        })
      }
    this.router.navigate([''])
     
    })
    // this.router.navigate([''])
  }
  redirect() {
    this.router.navigate([''])
  }
  
}
