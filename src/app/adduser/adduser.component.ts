import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  err:any;
  formgroup:any
  validate:any


  constructor(private user:SharedService) { }

  adduser(){

    if(this.formgroup.valid){
    this.validate=true
    console.log(this.formgroup.value);
    this.user.adduser(this.formgroup.value).subscribe(data => {console.log(data);  this.err="User registered Successfully!"; this.formgroup.reset()},error=>{console.log(error); this.err="User register failed!"});
    }

    else{
      this.validate = false
    }
    
    
    
    
    
  }

  initform(){

    this.formgroup = new FormGroup({
      FirstName:new FormControl('',[Validators.required]),
      LastName:new FormControl('',[Validators.required]),
      Email:new FormControl('',[Validators.required]),
      Password:new FormControl('',[Validators.required]),
      ConfirmPassword:new FormControl('',[Validators.required])


    })
  }

  ngOnInit(): void {
    this.initform()
  }

}
