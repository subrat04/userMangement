import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-first-project';

  constructor(private router:Router){}
  ngOnInit(): void {

  }

  logout(){
    localStorage.removeItem("token")
    this.router.navigate([""])
  }
}
