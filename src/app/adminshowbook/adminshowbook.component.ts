import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-adminshowbook',
  templateUrl: './adminshowbook.component.html',
  styleUrls: ['./adminshowbook.component.css']
})
export class AdminshowbookComponent implements OnInit {


  BookList:any=[];
  Category:any;
  err:any
  nocat:any;

  constructor(private user:SharedService,private router:Router) { }

  ngOnInit(): void {
    this.refresh();
  }


refresh(){
  this.user.getbookadmin().subscribe(data => {
      this.BookList = data;
      console.log(data)
      this.err="success";
      this.nocat=false;
  },error => this.err = "Error occured can not recieve the list!")
}

search(){
  console.log(this.Category)
  if(this.Category =="" || this.Category == undefined){
    this.nocat=false;
    this.ngOnInit()
  }
  else{
  this.user.getbycatadmin(this.Category).subscribe(data => {
    this.BookList = data;
    console.log(data.length);
    
    if(data.length==0){
      this.nocat=true;
      this.err="unsuccess";
    }
    else{
      this.err="success";
      this.nocat=false;
    }
    },error => this.err = "Error occured can not recieve the list!")
    
}
}

logout(){
  
  localStorage.removeItem('token')
  this.router.navigate([''])
  alert("You are logged out")

}

}
