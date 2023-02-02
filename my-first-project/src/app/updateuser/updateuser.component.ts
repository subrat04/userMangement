import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css'],
})
export class UpdateuserComponent implements OnInit {
  userId: any;
  users:any
  showPassword:boolean=false
  password:any
  updateUser = new FormGroup({
    Name: new FormControl(''),
    email: new FormControl(''),
    userId: new FormControl(''),
    password: new FormControl(''),
    level:new FormControl('')
  });
  constructor(
    private user: ApiServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      if (param.has('id')) {
        this.userId = param.get('id');
        console.log('empId is', this.userId);
      }
    });
    this.getUser()
  }

  updateUsers() {
    console.log(this.updateUser.value);
    this.user
      .updateUser(this.updateUser.value, this.userId)
      .subscribe((res) => {
        if (res) {
          Swal.fire({
            title: 'Success!',
            text: 'User Updated Successfully',
            timer: 1500,
          });
        }
        this.router.navigate(['/users']);
      });
  }

  getUser(){
    this.user.getUser(this.userId).subscribe((res:any)=>{
      console.log("result is",res)
      res.users=res.data
      console.log(res.data)
      this.updateUser.setValue({Name:res.data[0].Name,email:res.data[0].email,userId:res.data[0].userId,password:res.data[0].slag,level:res.data[0].level})
    })
  }
}
