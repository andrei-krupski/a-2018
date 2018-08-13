import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LessonModel, InnerLessonsModel } from '../lesson/lesson.model';
import { DeleteLessonDialogComponent } from '../delete-lesson-dialog/delete-lesson-dialog.component';

import { LessonsService } from '../lessons.service';
import { LoginService } from '../../core/login.service';

import { LESSONS_INCREASE_COUNT, DEFAULT_LESSONS_QUERY_PARAMS } from '../../app.config';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.styl']
})
export class LessonsListComponent implements OnInit {
  lessons: LessonModel[];
  total: number;
  params = Object.assign({}, DEFAULT_LESSONS_QUERY_PARAMS);
  noLessonsMsg = 'No data. Feel free to add new course';

  constructor(
    private lessonService: LessonsService,
    private lognService: LoginService,
    private dialog: MatDialog
  ) {
    this.lessons = [];
  }

  private getLessons() {
    this.noLessonsMsg = 'No data. Feel free to add new course';

    this.lessonService.getLessons(this.params).subscribe(
      (res: InnerLessonsModel) => {
        this.lessons = res.courses || null;
        this.total = res.total;
      },
      (errMessage) => {
        this.lessons = null;
        this.noLessonsMsg = errMessage;
      }
    );
  }

  ngOnInit() {
    this.getLessons();
  }

  deleteLesson(id: number) {
    if (!this.lognService.isAuthenticated()) {
      return;
    }

    const dialogRef = this.dialog.open(DeleteLessonDialogComponent, {width: '250px'});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.lessonService.deleteLessonById(id).subscribe(() => this.getLessons());
      }
    });
  }

  loadMore() {
    this.params.count = this.lessons.length + LESSONS_INCREASE_COUNT;
    this.getLessons();
  }

  onSearch(searchText: string) {
    this.params.count = DEFAULT_LESSONS_QUERY_PARAMS.count;
    this.params.textFragment = searchText;

    this.getLessons();
  }
}
