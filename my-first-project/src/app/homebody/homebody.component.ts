import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homebody',
  templateUrl: './homebody.component.html',
  styleUrls: ['./homebody.component.css']
})
export class HomebodyComponent implements OnInit {
constructor(private route:Router){}

  ngOnInit(): void {
    
  }
  redirect(){
    this.route.navigate(["/help"])
  }
}
