import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
    
  formgroup:any
  alert:any
 
 
  constructor(private user:SharedService ,private router:Router) { }

  ngOnInit(){
    this.initform();
  }

  initform(){
    this.formgroup = new FormGroup({
      Email:new FormControl('',[Validators.required]),
      Password:new FormControl('',[Validators.required])
      
    })
  }

  login(){
    if(this.formgroup.valid){
      this.alert="hide"
    
      this.user.loginuser(this.formgroup.value).subscribe(result=>{
      console.log(result);
      localStorage.setItem('token',result['token'])
      this.router.navigate(['/usermenu'])
    },error=>alert("Invalid email or password"));
    }
    else{
      this.alert="show"
    }
  }

  
  

}
