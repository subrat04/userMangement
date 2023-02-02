import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any; 
  level:any
  userId:any
  constructor(private api: ApiServiceService,private router:Router,private route:ActivatedRoute ) {}
  ngOnInit(): void {
    this.getusers();
    this.level=localStorage.getItem('level')
    
  }
  redirect(id:any) {

    this.router.navigate(['/updateUser',id]);
  }

  createuser(id:any){
  this.api.getUserInfo(id).subscribe((res:any)=>{
    console.log(res)
    if(res.data.length==1){
      alert("You Are Already Register")
    }else{
      this.router.navigate(["/registeruserInfo",id])
    }
  })
    
  }

userinfo(id:any){
this.router.navigate(["/registeruserInfo",id])
}

getuserinfo(id:any){
  this.router.navigate(['/allDetail',id])
}

  getusers(){
    this.api.getUsers().subscribe((res:any)=>{
    console.log("get all data",res)
    if(this.level==1){
      this.users = res.data
    }else{
      this.users= res.data.filter((m:any)=>{
        if(m.level==2){
          return m
        }
      })
    }
    
    })
    
  }

  deleteusers(id:any){
    console.log('id',id)

    this.api.deleteUsers(id).subscribe((res:any)=>{
      if (res) {
        Swal.fire({
          title: 'Success!',
          text: res.message,
          timer: 1500,
        });
        // this.getemployee();
      }
      this.getusers()
    })
  }
  
}
