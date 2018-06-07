import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { LessonComponent } from './lesson/lesson.component';
import { SearchComponent } from './search/search.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';

const routes: Routes = [
  {
    path: '',
    component: LessonsListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    LessonComponent,
    SearchComponent,
    LessonsListComponent
  ],
  exports: [RouterModule]
})
export class LessonsModule {}
