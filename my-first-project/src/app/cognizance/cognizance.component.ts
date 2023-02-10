import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cognizance',
  templateUrl: './cognizance.component.html',
  styleUrls: ['./cognizance.component.css']
})
export class CognizanceComponent implements OnInit{
  constructor( private route:Router){}
ngOnInit(): void {
  
}
redirectd(){
  this.route.navigate(["/help"])
}
redirect(){
  this.route.navigate(["/cyberspace"])
}
mobileblog(){
  this.route.navigate(["/grow-your-business-with-custom-mobile-apps"])
}
phpblog(){
  this.route.navigate(["/benefits-of-PHP-in-web-development"])
}
customsoftwaredevlopment(){
  this.route.navigate(["/custom-software-development-to-expand-your-business"])
}
phpdevlopment(){
  this.route.navigate(["/choose-right-php-development-company"])
}
saasdevlopment(){
  this.route.navigate(["/saas-application-development"])
}
}
