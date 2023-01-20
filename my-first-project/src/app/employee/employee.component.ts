import { Component,OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:any
constructor(private api:ApiServiceService){
}
  ngOnInit(): void {
    this.getemployee()
  }
  getemployee(){
    this.api.getEmployee().subscribe((res:any)=>{
      console.log("get all employee",res)
      this.employee=res.data
    })
  }
}
