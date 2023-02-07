import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  level: any;
  users:any
  constructor(private router:Router){}
  ngOnInit(): void {
   this.level = localStorage.getItem('level')
  }
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("level")
    this.router.navigate([""])
  }
  getuserinfo(id:any){
    this.router.navigate(['/userProfile',id])
  }
}
