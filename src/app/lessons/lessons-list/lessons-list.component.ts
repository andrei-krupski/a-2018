import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { LessonModel } from '../lesson/lesson.model';
import { DeleteLessonDialogComponent } from '../delete-lesson-dialog/delete-lesson-dialog.component';

import { LessonsService } from '../lessons.service';
import { LoginService } from '../../core/login.service';
import { AppState, lessonsSelector } from '../../app.states';

import { LESSONS_INCREASE_COUNT, DEFAULT_LESSONS_QUERY_PARAMS } from '../../app.config';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.styl']
})
export class LessonsListComponent implements OnInit, OnDestroy {
  lessons: LessonModel[];
  total: number;
  params = Object.assign({}, DEFAULT_LESSONS_QUERY_PARAMS);
  noLessonsMsg = 'No data. Feel free to add new course';
  private subscriptions = [];

  constructor(
    private store: Store<AppState>,
    private lessonService: LessonsService,
    private lognService: LoginService,
    private dialog: MatDialog
  ) {
    this.lessons = [];
  }

  ngOnInit() {
    const lessonsSubcrb = this.store.pipe(select(lessonsSelector)).subscribe(lessonsData => {
      this.lessons = lessonsData.lessons || null;
      this.total = lessonsData.total || 0;
      this.noLessonsMsg = lessonsData.errorMsg;
    });

    this.lessonService.getLessons(this.params);

    this.subscriptions.push(lessonsSubcrb);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe ? subscription.unsubscribe() : subscription();
    });
  }

  deleteLesson(id: number) {
    if (!this.lognService.isAuthenticated()) {
      return;
    }

    const dialogRef = this.dialog.open(DeleteLessonDialogComponent, {width: '250px'});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.lessonService.deleteLessonById(id).subscribe(() => this.lessonService.getLessons(this.params));
      }
    });
  }

  loadMore() {
    this.params.count = this.lessons.length + LESSONS_INCREASE_COUNT;
    this.lessonService.getLessons(this.params);
  }

  onSearch(searchText: string) {
    this.params.count = DEFAULT_LESSONS_QUERY_PARAMS.count;
    this.params.textFragment = searchText;

    this.lessonService.getLessons(this.params);
  }
}
