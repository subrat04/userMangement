import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import {FormGroup,FormControl} from '@angular/forms'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  empId:any
  employee:any
  updateEmploye=new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    address:new FormControl(''),
    location:new FormControl('')
  })

  constructor(private user:ApiServiceService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    
    this.route.paramMap.subscribe((param:ParamMap)=>{
      if(param.has('id')){
        this.empId = param.get('id')
        console.log("empId is",this.empId)
      }
    })
    this.getemployee()
  }
  updateemployee(){
    console.log(this.updateEmploye.value)
    this.user.updateEmployee(this.updateEmploye.value,this.empId).subscribe((res)=>{
      if(res){
        Swal.fire({
          title: 'Success!',
          text: 'Employee Updated Successfully',
          timer: 1500,
        });
      }
    })
    this.router.navigate(["/employee"])
  }
  getemployee(){
    this.user.getEmployee(this.empId).subscribe((res:any)=>{
      console.log("get all employee",res)
      this.employee=res.data
      this.updateEmploye.setValue({firstName:res.data[0].firstName,lastName:res.data[0].lastName,email:res.data[0].email,phone:res.data[0].phone,address:res.data[0].address,location:res.data[0].location})
    })
  }


}
