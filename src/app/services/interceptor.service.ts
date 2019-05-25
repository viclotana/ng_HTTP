import { Injectable } from '@angular/core';
import { 
  HttpInterceptor, HttpRequest, 
  HttpHandler, HttpEvent, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  handleError(error: HttpErrorResponse){
    console.log("lalalalalalalala");
    return throwError(error);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): 
  Observable<HttpEvent<any>>{

    return next.handle(req)
    .pipe(
      catchError(this.handleError)
    )
  };
}
