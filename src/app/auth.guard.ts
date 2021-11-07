import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SharedService } from './shared.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _shared:SharedService,private _router:Router,){}
 
  canActivate():boolean
  {
    if(this._shared.loggedinadmin()){
      return true;
    }
    else{
      this._router.navigate([''])
      alert("Log in first!")
      return false;
    }
  }
}
