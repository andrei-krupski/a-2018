import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from '../core/login.service';

@Injectable({
  providedIn: 'root'
})
export class LessonGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  canActivate(): Observable<boolean>  {
    return new Observable((observer) => {
      const isAuthenticated = this.loginService.isAuthenticated();

      if (!isAuthenticated) {
        this.router.navigate(['/login']);
      }

      observer.next(isAuthenticated);
    });
  }
}
