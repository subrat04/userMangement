import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employee: any;
  level: any;
  constructor(private api: ApiServiceService, private router: Router) {}
  ngOnInit(): void {
    this.getemployee();
    this.level=localStorage.getItem("level")
  }
  getemployee() {
    this.api.getEmployees().subscribe((res: any) => {
      console.log('get all employee', res);
      this.employee = res.data;
    });
  }
  redirect(id: any) {
    console.log('id is ', id);
    this.router.navigate(['/updateEmployee', id]);
  }

  deleteEmployee(id: any) {
    this.api.deleteEmployee(id).subscribe((res: any) => {
      if (res) {
        Swal.fire({
          title: 'Success!',
          text: res.message,
          timer: 1500,
        });
        // this.getemployee();
      }
      this.getemployee();

    });
  }
}