import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LoadingBlockService } from '../loading-block';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(private loadingBlockService: LoadingBlockService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingBlockService.showLoader();

        return next.handle(req)
            .pipe(tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse || event instanceof HttpErrorResponse) {
                    console.log(event);
                    this.loadingBlockService.hideLoader();
                }
            }));
    }
}
