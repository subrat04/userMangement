import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-alldetailuser',
  templateUrl: './alldetailuser.component.html',
  styleUrls: ['./alldetailuser.component.css'],
})
export class AlldetailuserComponent implements OnInit {
  users: any;
  userId:any
  constructor(private api: ApiServiceService , private route:ActivatedRoute) {}
  ngOnInit(): void {
   
    this.route.paramMap.subscribe((param:ParamMap)=>{
      if(param.has('id')){
        this.userId = param.get('id')
        console.log("userId",this.userId)
      }
    })
    this.getfamilyinfo()
  }

  getfamilyinfo() {
    this.api.getUserInfo(this.userId).subscribe((res: any) => {
        this.users = res.data
    });
  }
}
