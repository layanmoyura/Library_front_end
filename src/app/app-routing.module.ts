import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { HomeComponent } from './home/home.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddupdatebookComponent } from './addupdatebook/addupdatebook.component';
import { AdminshowbookComponent } from './adminshowbook/adminshowbook.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { AuthGuard } from './auth.guard';
import { UsershowbookComponent } from './usershowbook/usershowbook.component';
import { UserauthGuard } from './userauth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'addupdatebook',component:AddupdatebookComponent,canActivate:[AuthGuard]},
  {path:'adminshowbook',component:AdminshowbookComponent,canActivate:[AuthGuard]},
  {path:'deletebook',component:DeletebookComponent,canActivate:[AuthGuard]},
  {path:'usermenu',component:UsermenuComponent,canActivate:[UserauthGuard]},
  {path:'adminmenu',component:AdminmenuComponent,canActivate:[AuthGuard]},
  {path:'usershowbook',component:UsershowbookComponent,canActivate:[UserauthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
