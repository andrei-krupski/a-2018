import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LessonModel } from '../lesson/lesson.model';
import { DeleteLessonDialogComponent } from '../delete-lesson-dialog/delete-lesson-dialog.component';

import { LessonsService } from '../lessons.service';
import { LoginService } from '../../core/login.service';
import { FilterPipe } from '../pipes/filter.pipe';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.styl']
})
export class LessonsListComponent implements OnInit {
  lessons: LessonModel[];

  constructor(
    private lessonService: LessonsService,
    private lognService: LoginService,
    private filter: FilterPipe,
    private dialog: MatDialog
  ) {
    this.lessons = [];
  }

  ngOnInit() {
    this.lessons = this.lessonService.getLessons();
  }

  editLesson(id: number) {
    this.lessonService.updateLesson(id);
  }

  deleteLesson(id: number) {
    if (!this.lognService.isAuthenticated()) {
      return;
    }

    const dialogRef = this.dialog.open(DeleteLessonDialogComponent, {width: '250px'});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.lessonService.deleteLessonById(id);
        this.lessons = this.lessonService.getLessons();
      }
    });
  }

  loadMore() {
    console.log('Load more');
  }

  onSearch(searchText: string) {
    this.lessons = this.filter.transform(this.lessonService.getLessons(), searchText);
  }
}
