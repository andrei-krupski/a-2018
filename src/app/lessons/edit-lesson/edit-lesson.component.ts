import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LessonsService } from '../lessons.service';
import { LessonModel } from '../lesson/lesson.model';

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class EditLessonComponent implements OnInit {
  private isNew = true;
  error = false;
  lesson: LessonModel = {
    title: '',
    description: '',
    duration: 0,
    creationDate: '',
    topRated: false,
    authors: []
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private lessonServise: LessonsService
  ) {}

  ngOnInit() {
    const lessonId = this.route.snapshot.params.id;

    this.isNew = !lessonId;

    if (lessonId) {
      this.lessonServise.getLessonById(lessonId).subscribe((lesson => this.lesson = lesson));
    }
  }

  saveLesson() {
    const validationObj = Object.assign({}, this.lesson);
    delete validationObj.topRated;

    if (Object.keys(validationObj).some((key) => !this.lesson[key])) {
      this.error = true;
      return;
    }

    this.lessonServise[this.isNew ? 'createLesson' : 'updateLesson'](this.lesson).subscribe(() => {
      this.router.navigate(['/lessons']);
    });
  }
}
