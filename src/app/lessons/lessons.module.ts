import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatDialogModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { RouterModule } from '@angular/router';
import { routes } from './lessons.routes';

import { LessonComponent } from './lesson/lesson.component';
import { SearchComponent } from './search/search.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonHighlightDirective } from './lesson-highlight.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DeleteLessonDialogComponent } from './delete-lesson-dialog/delete-lesson-dialog.component';
import { EditLessonComponent } from './edit-lesson/edit-lesson.component';
import { LessonDateComponent } from './lesson-date/lesson-date.component';
import { LessonDurationComponent } from './lesson-duration/lesson-duration.component';
import { LessonAuthorComponent } from './lesson-author/lesson-author.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    LessonComponent,
    SearchComponent,
    LessonsListComponent,
    LessonHighlightDirective,
    DurationPipe,
    SortByDatePipe,
    FilterPipe,
    DeleteLessonDialogComponent,
    EditLessonComponent,
    LessonDateComponent,
    LessonDurationComponent,
    LessonAuthorComponent
  ],
  entryComponents: [DeleteLessonDialogComponent],
  providers: [FilterPipe],
  exports: [RouterModule]
})
export class LessonsModule {}
