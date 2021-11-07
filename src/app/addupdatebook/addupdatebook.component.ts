import { Component, HostListener, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-addupdatebook',
  templateUrl: './addupdatebook.component.html',
  styleUrls: ['./addupdatebook.component.css']
})


export class AddupdatebookComponent implements OnInit {

image:any;
formgroup:any
hide:boolean =false;
err:any;
validate:any;
id:any;
upvali:any;
pageYoffset:any;

@HostListener('window:scroll', ['$event']) onScroll(event){
  this.pageYoffset = window.pageYOffset;
}


  onChange($event:Event){
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);
    this.convertToBase64(file);

  }


  convertToBase64(file:File){
    const observable = new Observable((subscriber:Subscriber<any>) => {
      this.readFile(file, subscriber);
    });

    observable.subscribe((data =>{
      console.log(data);
      this.image = data;
      
    }))
  }


  readFile(file:File, subscriber:Subscriber<any>){
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };

    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    }
  }


  initform(){

    

    this.formgroup = new FormGroup({
      
      BookID:new FormControl('',[Validators.required]),
      BookName:new FormControl('',[Validators.required]),
      Author:new FormControl('',[Validators.required]),
      Category:new FormControl('',[Validators.required]),
      Editon:new FormControl('',[Validators.required]),
      LastEditDate:new FormControl('',[Validators.nullValidator]),
      Link:new FormControl('',[Validators.required]),
      CoverImage:new FormControl('',[Validators.nullValidator])
     
    })



    
  }

  constructor(private user:SharedService,private router:Router,private scroll: ViewportScroller) { }

  ngOnInit(): void {
    this.initform();
  }

  postbook(){

    this.formgroup.patchValue({
      CoverImage:this.image
    })

    if(this.formgroup.valid){
   
    this.validate=true;
     console.log(this.formgroup.value);
     this.user.addbook(this.formgroup.value).subscribe(data => {this.err="Book is added successfully"; this.formgroup.reset()},error => this.err="Book adding is failed")

    }

    else{
        this.validate=false;
        this.upvali=true;
    }

    this.scrollToTop();
    
  }

  putbook(){
    this.formgroup.patchValue({
      CoverImage:this.image
    })
    this.id = this.formgroup.controls['BookID'].value
    console.log(this.id)
    this.validate=true;
    
    if(Number.isInteger(this.id)){
      this.upvali=true;
      console.log(this.formgroup.value);
      this.user.updatebook(this.id,this.formgroup.value).subscribe(data => {this.err="Book is updated successfully"; this.formgroup.reset()},error =>{ this.err="Book updating is failed";})
    }

    else{
      this.upvali=false;
      this.validate=true;
    }
    this.scrollToTop();
  }

  logout(){
  
    localStorage.removeItem('token')
    this.router.navigate([''])
    alert("You are logged out")
  
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
}

}
