import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { RouterService } from '../router.service';

import { UserModel } from '../../user/user.model';
import { HEADER_LOGIN_DEPRECATED_PAGES } from '../../app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLogged = false;
  isHiddenLoginBox = false;
  user: UserModel;
  private subscriptions = [];

  constructor(
    private router: Router,
    private loginService: LoginService,
    private routerService: RouterService
  ) {}

  ngOnInit() {
    this.isLogged = this.loginService.isAuthenticated();
    this.user = this.loginService.getUserInfo();

    const loginSubcrb = this.loginService.isLogged.subscribe(result => {
      this.isLogged = result;
      this.user = this.loginService.getUserInfo();
    });

    const routerSubscrb = this.routerService.onRouteChange.subscribe(data => {
      this.isHiddenLoginBox = !HEADER_LOGIN_DEPRECATED_PAGES.some(path => data.url.includes(path));
    });

    this.subscriptions.push(loginSubcrb, routerSubscrb);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription());
  }

  logOut() {
    this.loginService.logOut();
    this.router.navigate(['/login']);
  }
}
