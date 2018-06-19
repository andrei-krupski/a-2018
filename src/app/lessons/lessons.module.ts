import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { routes } from './lessons.routes';

import { LessonComponent } from './lesson/lesson.component';
import { SearchComponent } from './search/search.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
