import { NgModule, Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = 'api-fluig.staging.totvs.app';

    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', req.url.indexOf(url) > -1 ? environment.authorization : `Bearer ${this.cookieService.get('token')}`),
    });

    return next.handle(clonedReq);
  }
}


@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
  ],
})

export class InterceptorModule { }
