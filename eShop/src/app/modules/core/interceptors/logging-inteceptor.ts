import { Injectable } from '@angular/core';
import { finalize, tap } from 'rxjs/operators';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const started = Date.now();
    let ok: string;
    let logs: string[] = [];
    return next.handle(req).pipe(
      tap(
        (event) => (
          (ok = event instanceof HttpResponse ? 'succeeded' : ''),
          (error) => (ok = 'failed')
        )
      ),
      finalize(() => {
        const timeElapsed: number = Date.now() - started;
        const msg: string = `${req.method} "${req.urlWithParams}" ${ok} in ${timeElapsed} ms.`;
        logs.push(msg);
        console.log(logs);
      })
    );
  }
}
