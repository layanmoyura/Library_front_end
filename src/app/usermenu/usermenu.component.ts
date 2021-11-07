import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.css']
})
export class UsermenuComponent implements OnInit {
username:any
  constructor(private router:Router,private shared:SharedService) { }

  ngOnInit(): void {
    this.username=this.shared.getname();
  }


  logout(){
    
    localStorage.removeItem('token')
    this.router.navigate([''])
    alert("You are logged out")
  
  }

  


}
