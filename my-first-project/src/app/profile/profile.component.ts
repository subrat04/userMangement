import { Component,OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: any;
  userId:any
  constructor(private api: ApiServiceService , private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.userId=localStorage.getItem('userId')
    this.getUserInfo()
  }
  getUserInfo() {
    this.api.getUser(this.userId).subscribe((res: any) => {
      console.log("user data",res.data)
        this.users = res.data
    });
  }
}
