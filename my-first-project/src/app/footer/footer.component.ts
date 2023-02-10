import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private route:Router){}
ngOnInit(): void {
  
}

home(){
  this.route.navigate(["/home"])
}
aboutus(){
  this.route.navigate(["/aboutus"])
}
cognizence(){
  this.route.navigate(["/cognizance"])
}
services(){
  this.route.navigate(["/services"])
}
contactus(){
  this.route.navigate(["/help"])
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
webdesign(){
  this.route.navigate(["/web-design"])
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
cloudsolution(){
  this.route.navigate(["/cloud-solutions"])
}


}

