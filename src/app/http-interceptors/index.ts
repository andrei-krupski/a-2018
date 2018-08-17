import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './auts-interceptor';
import { LoaderInterceptor } from './loader-interceptor';

export const authInterceptorProvider = { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true };
export const loaderInterceptorProvider = { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true };
