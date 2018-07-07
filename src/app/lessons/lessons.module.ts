import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { routes } from './lessons.routes';

import { LessonComponent } from './lesson/lesson.component';
import { SearchComponent } from './search/search.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonHighlightDirective } from './lesson-highlight.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    LessonComponent,
    SearchComponent,
    LessonsListComponent,
    LessonHighlightDirective,
    DurationPipe,
    SortByDatePipe,
    FilterPipe
  ],
  providers: [FilterPipe],
  exports: [RouterModule]
})
export class LessonsModule {}
