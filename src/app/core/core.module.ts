import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsModule } from '../lessons/lessons.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule,
    LessonsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ContentComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ContentComponent
  ]
})
export class CoreModule { }
