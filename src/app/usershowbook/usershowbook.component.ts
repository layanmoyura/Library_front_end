import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usershowbook',
  templateUrl: './usershowbook.component.html',
  styleUrls: ['./usershowbook.component.css']
})
export class UsershowbookComponent implements OnInit {

  BookList:any=[];
  Category:any;
  err:any
  nocat:any;
  

  constructor(private user:SharedService,private router:Router) { }

  ngOnInit(): void {
    this.refresh();
  }


refresh(){
  this.user.getbookuser().subscribe(data => {
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
  this.user.getbycatuser(this.Category).subscribe(data => {
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
  
  localStorage.removeItem('tokenuser')
  this.router.navigate([''])
  alert("You are logged out")

}



}
