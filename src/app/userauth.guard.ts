import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserauthGuard implements CanActivate {
  constructor(private _shared:SharedService,private _router:Router){}
 
  canActivate():boolean
  {
    if(this._shared.loggedinuser()){
      return true;
    }
    else{
      this._router.navigate([''])
      alert("Log in first!")
      return false;
    }
  }
  
}
