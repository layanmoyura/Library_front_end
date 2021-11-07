import { Component, OnInit } from '@angular/core';

import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {

formgroup:any;
id:any
BookList:any=[];
err:any;
noid:any;



  constructor(private users:SharedService,private router:Router) { }


  initform(){
    this.formgroup =new FormGroup({
      ID:new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {

  this.initform()

  }

  delete(){
    
    if(this.formgroup.valid){
      this.noid=false;
      this.id = this.formgroup.controls['ID'].value
      this.users.deletebook(this.id).subscribe(data=> this.err="The book is deleted!",error => this.err="Error occured can not delete the book and ensure that valid id is provided!")
    }
  }

  load(){
    if(this.formgroup.valid){
      this.id = this.formgroup.controls['ID'].value
      this.users.getbyid(this.id).subscribe(data =>{
        this.BookList=data;
        console.log(data);
        if(data.length==0){
          this.noid = true
          this.err="unsuccess";
         
        }
        else{
          this.noid=false;
        this.err="success";
        
        }
      } ,error => {console.log(error),
        this.err="unsuccess";
        this.noid="Book Loading failed"
      if(error.status==401){
        alert("Log in first")
        this.router.navigate([''])
      }}
      
       
      )
    }
  }


  logout(){
  
    localStorage.removeItem('token')
    this.router.navigate([''])
    alert("You are logged out")
  
  }


  

}
