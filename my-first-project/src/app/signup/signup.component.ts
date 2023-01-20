import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  adduser= new FormGroup({
    Name:new FormControl(''),
    email:new FormControl(''),
    userId:new FormControl(''),
    password:new FormControl('')
  })

  constructor(private user:ApiServiceService,private router:Router) {}
  
  ngOnInit(): void {
   
  }
  registerUser(){
      console.log(this.adduser.value)
    this.user.addUser(this.adduser.value).subscribe((res)=>{
      //alert section 
      if(res) {
        Swal.fire({
          title:'registered alert',
          text:'user registered successfully',
          timer:1500
        })
      }

    })
    this.router.navigate([''])
  }
  redirect() {
    this.router.navigate([''])
  }
  handleregister(){
     return alert("user login successfully")
  }
}
