import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mobileapps',
  templateUrl: './mobileapps.component.html',
  styleUrls: ['./mobileapps.component.css']
})
export class MobileappsComponent implements OnInit {
  constructor(private router:Router){}
ngOnInit(): void {
  
}

}
