import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { RouteDataModel } from './route-data.model';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  private onRouteChangeSource = new Subject<RouteDataModel>();
  onRouteChange = this.onRouteChangeSource.asObservable();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.onRouteChangeSource.next({route: this.activatedRoute, url: this.router.routerState.snapshot.url});
    });
  }
}
