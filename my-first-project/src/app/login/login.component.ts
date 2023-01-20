import { Component,OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import {FormGroup,FormControl} from '@angular/forms'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
// import {userRegister} from "../api-service.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginuser= new FormGroup({
    userId:new FormControl(''),
    password:new FormControl('')
  })

  constructor(private user:ApiServiceService,private router:Router) {}
  // addUser(formValues:any) {
  //   this.apiService.addUser(formValues)
  // }
  ngOnInit(): void {
   
  }
  loginUsers(){
      console.log(this.loginuser.value)
      this.user.loginUsers(this.loginuser.value).subscribe((res:any)=>{
        if(res){
          console.log('res is',res)
      localStorage.setItem("token",res.token)

          Swal.fire({
            title:'login alert',
            text:'user login successfully',
            timer:1500
          })
        }
      })
      this.router.navigate(["/home"])
  }
  redirect() {
    this.router.navigate(['/signup'])
  }

}
