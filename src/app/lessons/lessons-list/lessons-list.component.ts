import { Component, OnInit } from '@angular/core';
import { LessonModel } from '../lesson/lesson.model';

import { LessonsService } from '../lessons.service';
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
    private filter: FilterPipe
  ) {
    this.lessons = [];
  }

  ngOnInit() {
    this.lessons = this.lessonService.getLessons();
  }

  deleteLesson(id: number) {
    this.lessonService.deleteLessonById(id);
  }

  loadMore() {
    console.log('Load more');
  }

  onSearch(searchText: string) {
    this.lessons = this.filter.transform(this.lessonService.getLessons(), searchText);
  }
}
