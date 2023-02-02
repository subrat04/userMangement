import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.css']
})
export class HomeheaderComponent implements OnInit {
constructor(private user:ApiServiceService,private route:Router){}
ngOnInit(): void {
  
}
redirect(){
this.route.navigate(["/help"])
}
}
