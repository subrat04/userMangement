import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-webdesigen',
  templateUrl: './webdesigen.component.html',
  styleUrls: ['./webdesigen.component.css']
})
export class WebdesigenComponent {
  constructor(private route:Router){}
  ngOnInit(): void {
    
  }
  androidDev(){
    this.route.navigate(["/android-app-development"])
  }
  mobileDev(){
    this.route.navigate(["/mobile-app-development"])
  }
  iosDev(){
    this.route.navigate(["/ios-app-development"])
  }
  contentwriting(){
    this.route.navigate(["/content-writing"])
  }
  devopsservice(){
    this.route.navigate(["/devops-service"])
  }
  phpwebdev(){
    this.route.navigate(["/php-web-development"])
  }
  sasdev(){
    this.route.navigate(["/saas-development"])
  }
  uiuxdesigen(){
    this.route.navigate(["/ui-ux-design"])
  }
  webdesigen(){
    this.route.navigate(["/web-design"])
  }
  cloudsolutions(){
    this.route.navigate(["/cloud-solutions"])
  }
}
