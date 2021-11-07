import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.css']
})
export class AdminmenuComponent implements OnInit {

  adminname:any

  constructor(private router:Router,private shared:SharedService) { }

  ngOnInit(): void {
    this.adminname=this.shared.getname();
    console.log(this.adminname)
  }

  logout(){
    
    localStorage.removeItem('token')
    this.router.navigate([''])
    alert("You are logged out")
  
  }

  

}
