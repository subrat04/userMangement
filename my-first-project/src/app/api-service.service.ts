import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  // link of backend
  link='http://localhost:5000'
  headers:any = {'x-api-key':localStorage.getItem("token") }
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
  getUser(id:any){
    console.log("payload")
    const url=this.link + `/getUser?_id=${id}`
    return this.http.get(url)
  }
  updateUser(payload:any,id:any){
    const url=this.link + `/updateUser/${id}`
    return this.http.put(url,payload)
  }
  deleteUsers(id:any){
    const url=this.link + `/deleteUser/${id}`
    return this.http.delete(url,{headers:this.headers})
  }

  registerUserInfo(payload:any,id:any){
    console.log("payload",payload)
    // const getid=localStorage.getItem('userId')  
    payload.userId=id
    const url=this.link + `/createUserInfo`
    return this.http.post(url,payload)
  }

  getUserInfo(id:any){
    const  url=  this.link + `/getuserInfo?userId=${id}`
    return this.http.get(url)
  }

  getEmployees(){
    console.log("payload")
    const url=this.link + `/employee`
    return this.http.get(url)
  }
  getEmployee(id:any){
    console.log("payload")
    const url=this.link + `/employee?_id=${id}`
    return this.http.get(url)
  }
  createEmployee(payload:any){
    console.log("payload")
    const getid=localStorage.getItem('userId')
    console.log('getid',getid)
    payload.userId = getid;
    const url=this.link + "/createEmployee"
    return this.http.post(url,payload)
  }
  updateEmployee(payload:any,id:any){
    console.log(payload)
    const url=this.link + `/updateEmployee/${id}`
    return this.http.put(url,payload,{headers:this.headers})
  }
 deleteEmployee(id:any){
  const url=this.link + `/deleteEmployee/${id}`
  return this.http.delete(url,{headers:this.headers})
 }

 isLoggedIn(){
  return !!localStorage.getItem('token')
 }
 contactus(payload:any,id:any){
  const url=this.link +`/contact/${id}`
  return this.http.post(url,payload)
 }
}
