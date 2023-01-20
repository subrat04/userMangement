import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private api: ApiServiceService) {}
  ngOnInit(): void {
    this.getusers();
  }
  getusers(){
    this.api.getUsers().subscribe((res:any)=>{
    console.log("get all data",res)
    this.users = res.data
    })
  }
}
