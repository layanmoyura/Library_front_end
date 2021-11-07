import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIurl = "https://localhost:5001/api";
  

  decoded:any

  constructor(private http:HttpClient,private router:Router,private jwtHelper: JwtHelperService) { }


  adduser(val:any){
    return this.http.post(this.APIurl+"/customerregister",val)
  }

  loginuser(val:any){
    return this.http.post(this.APIurl+"/customerlogin",val)
  }

  loginadmin(val:any){
    return this.http.post(this.APIurl+"/adminlogin",val)
  }

  addbook(val:any){
    return this.http.post(this.APIurl+"/bookadmin/addorupdatebook",val)
  }

  getbookadmin():Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/bookadmin/showbook")
  }

  getbookuser():Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/bookcustomer/showbook")
  }

  updatebook(id:any,val:any){
    return this.http.put(this.APIurl+"/bookadmin/addorupdatebook/"+id,val);
  }

  deletebook(id:any){
    return this.http.delete(this.APIurl+"/bookadmin/deletebook/"+id)
  }


  getbyid(id:any):Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/bookadmin/searchbook/id/"+id)
  }

  getbycatuser(cat:any):Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/bookcustomer/searchbook/category?bycategory="+cat)
  }

  getbycatadmin(cat:any):Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/bookadmin/searchbook/category?bycategory="+cat)
  }

  loggedinadmin(){ 
    
    this.decoded = localStorage.getItem('token')
  const decodedaf = this.jwtHelper.decodeToken(this.decoded)
  
  if(decodedaf!=null && decodedaf.role =="admin"){
    return true;
  }
  else{
    return false;
  }}


  loggedinuser(){
    this.decoded = localStorage.getItem('token')
    const decodedaf = this.jwtHelper.decodeToken(this.decoded)
    
    if(decodedaf!=null && decodedaf.role =="user"){
      return true;
    }
    else{
      return false;
    }
  }


  gettoken(){
   
      return localStorage.getItem('token') 
  }

  getname(){
    this.decoded = localStorage.getItem('token')
    const decodedaf = this.jwtHelper.decodeToken(this.decoded)
    
    if(decodedaf!=null){
      const name= decodedaf.name;
      return name;
    }
  }

  

 

  

  

}
