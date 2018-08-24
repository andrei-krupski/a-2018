import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { LoginService } from '../login.service';
import { RouterService } from '../router.service';

import { AppState, authSelector, userSelector } from '../../app.states';
import { LoginAction } from '../../actions';

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
    private routerService: RouterService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    const loginSubcrb = this.store.pipe(select(authSelector)).subscribe(value => {
      this.isLogged = value;
    });

    const userSubcrb = this.store.pipe(select(userSelector)).subscribe(user => {
      this.user = user;
    });

    const routerSubscrb = this.routerService.onRouteChange.subscribe(data => {
      this.isHiddenLoginBox = !HEADER_LOGIN_DEPRECATED_PAGES.some(path => data.url.includes(path));
    });

    if (this.loginService.isAuthenticated()) {
      this.store.dispatch(new LoginAction());
      this.loginService.getUserInfo();
    }

    this.subscriptions.push(loginSubcrb, userSubcrb, routerSubscrb);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe ? subscription.unsubscribe() : subscription();
    });
  }

  logOut() {
    this.loginService.logOut();
    this.router.navigate(['/login']);
  }
}
