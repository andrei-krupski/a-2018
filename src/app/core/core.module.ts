import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { routes } from './core.routes';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ContentComponent } from './content/content.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ContentComponent,
    LoginPageComponent,
    NotFoundPageComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ContentComponent,
    RouterModule
  ]
})
export class CoreModule { }
