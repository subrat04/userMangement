import { Component,OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registeremployee',
  templateUrl: './registeremployee.component.html',
  styleUrls: ['./registeremployee.component.css']
})
export class RegisteremployeeComponent implements OnInit {
  submitted:boolean = false;
  errormsg: any;
  userForm : FormGroup | undefined
  constructor(private user:ApiServiceService,private router:Router){}
  addEmployee=new FormGroup({
    firstName:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    location:new FormControl('',[Validators.required])
  })
  get f() {return this.addEmployee.controls;}

  ngOnInit(): void {
    
  }
  registerEmployee(){
    this.submitted = true;
    if(this.addEmployee.invalid) {
      this.errormsg = 'all fields required'
    }
    this.user.createEmployee(this.addEmployee.value).subscribe((res:any)=>{
      if(res){
        console.log("res")
        Swal.fire({
          title: 'Success!',
          text: "Employee Create Successfully ",
          timer: 1500,
        });
      }
    this.router.navigate(["/employee"])

    },error=>{
      Swal.fire({
        title:"Error!",
        text:'Error Occured',
        timer:1500
      })
    })
    // this.router.navigate(["/employee"])
  }

}
