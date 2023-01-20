import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  // link of backend
  link='http://localhost:5000'
  // import http client and call in constructer with private
  constructor(private http:HttpClient) {
   }


  addUser(payload:any){
    console.log("payload is",payload)
    const url = this.link + "/register"
    return this.http.post(url,payload)
  }
  loginUsers(payload:any){
    console.log("payload",payload)
    const url=this.link +"/login"
   return this.http.post(url,payload)
  }
  getUsers(){
    console.log("payload")
    const url=this.link + "/getUser"
    return this.http.get(url)
  }
  getEmployee(){
    console.log("payload")
    const url=this.link + "/employee"
    return this.http.get(url)
  }
  
}
