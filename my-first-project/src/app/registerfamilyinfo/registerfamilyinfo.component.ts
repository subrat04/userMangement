import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import {FormGroup,FormControl, NgForm, Validators} from '@angular/forms'
import {ParamMap,ActivatedRoute} from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registerfamilyinfo',
  templateUrl: './registerfamilyinfo.component.html',
  styleUrls: ['./registerfamilyinfo.component.css']
})
export class RegisterfamilyinfoComponent implements OnInit {
  selectedOption:any = 'option1'
  userId:any
  users:any
  submitted:boolean = false;
  errormsg: any;
  userForm : FormGroup | undefined
  addfamilyinfo=new FormGroup({
    fatherName:new FormControl('',[Validators.required]),
    motherName:new FormControl('',[Validators.required]),
    permanentAddress:new FormControl('',[Validators.required]),
    spouseName:new FormControl('')
  })
  get f() {return this.addfamilyinfo.controls;}

  spouse: boolean=false;
  constructor(private user:ApiServiceService,private router:Router ,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param:ParamMap)=>{
      if(param.has('id')){
        this.userId=param.get('id')
        console.log("empId is",this.userId)
      }
    })
    this.getUsersinfo()
  }

  registerFamily(){
    // console.log("id is",id)
    this.submitted = true;
    if(this.addfamilyinfo.invalid) {
      console.log("i am inside if loop; ",this.addfamilyinfo.invalid)
      this.errormsg = 'all fields required'
    }else{
      let payload = {
        "fatherName":this.addfamilyinfo.value.fatherName,
        "motherName":this.addfamilyinfo.value.motherName,
        "permanentAddress":this.addfamilyinfo.value.permanentAddress,
         "spouseName":this.addfamilyinfo.value.spouseName,
         "maritalStatus":this.spouse == true ? 'married':'unmarried'
      }
    this.user.registerUserInfo(payload,this.userId).subscribe((res:any)=>{
      if(res){
        Swal.fire({
          title: 'Success!',
          text: "Family info created ",
          timer: 1500,
        });
        this.router.navigate([`/allDetail/${this.userId}`])
      }
    })
  }
  }
  onRadioChange(type:any) {
    console.log('fjkdf',type.value)
    this.selectedOption = type.value;
    if(type.value=='married') {
      this.spouse = true;
    }else {
      this.spouse = false;
      // this.addfamilyinfo.patchValue()
    }
  }

  getUsersinfo(){
    this.user.getUserInfo(this.userId).subscribe((res:any)=>{
      console.log("res is",res)
      this.users=res.data
    })
  }


}
