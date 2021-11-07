import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedService } from './shared.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http' 
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdduserComponent } from './adduser/adduser.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddupdatebookComponent } from './addupdatebook/addupdatebook.component';
import { AdminshowbookComponent } from './adminshowbook/adminshowbook.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { AuthGuard } from './auth.guard';
import { UserauthGuard } from './userauth.guard';
import { UsershowbookComponent } from './usershowbook/usershowbook.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { JwtHelperService,JWT_OPTIONS } from '@auth0/angular-jwt';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdduserComponent,
    UserloginComponent,
    AdminloginComponent,
    AddupdatebookComponent,
    AdminshowbookComponent,
    DeletebookComponent,
    AdminmenuComponent,
    UsermenuComponent,
    UsershowbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [SharedService,AuthGuard,UserauthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  },{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
