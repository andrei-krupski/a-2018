import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './auts-interceptor';

export const authInterceptorProvider = { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true };
