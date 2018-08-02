import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RouterService } from '../router.service';
import { BreadcrumbModel } from './breadcrumbs.model';

import { BREDCRUMBS_DEPRECATED_PAGES } from '../../app.config';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.styl']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  isDeprecadetPage: boolean;
  breadcrumbs: Array<BreadcrumbModel> = [];
  private subscriptions = [];

  constructor(private routerService: RouterService) {}

  ngOnInit() {
    const routeSubcrb = this.routerService.onRouteChange.subscribe(data => {
      this.isDeprecadetPage = BREDCRUMBS_DEPRECATED_PAGES.some(path => data.url.includes(path));

      this.breadcrumbs = this.buildBreadcrumbs(data.route.root);
    });

    this.subscriptions.push(routeSubcrb);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription());
  }

  buildBreadcrumbs(route: ActivatedRoute, breadcrumbs: Array<BreadcrumbModel> = []) {
    let newBreadcrumbs: Array<BreadcrumbModel>;

    if (!route.snapshot.routeConfig) {
      newBreadcrumbs = [...breadcrumbs, {
        label: 'home',
        url: '/'
      }];

      return route.firstChild ? this.buildBreadcrumbs(route.firstChild, newBreadcrumbs) : newBreadcrumbs;
    }

    if (route.snapshot.routeConfig.path && route.snapshot.routeConfig.path === 'lessons') {
      return route.firstChild ? this.buildBreadcrumbs(route.firstChild, newBreadcrumbs) : breadcrumbs;
    }

    const path = route.snapshot.url.map(urlSegment => `/${urlSegment.path}`).join('');

    newBreadcrumbs = [...breadcrumbs, {
      label: path,
      url: route.firstChild ? path : ''
    }];

    return route.firstChild ? this.buildBreadcrumbs(route.firstChild, newBreadcrumbs) : newBreadcrumbs;
  }
}
