import { Injectable ,Injector} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { SharedService } from './shared.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req,next){
    let sharedservice = this.injector.get(SharedService)
    let tokenizedReq = req.clone({
      setHeaders : {
        Authorization: `Bearer ${sharedservice.gettoken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
