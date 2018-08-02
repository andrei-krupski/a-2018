import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LessonsService } from '../lessons.service';
import { NewLessonModel } from '../lesson/lesson.model';

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class EditLessonComponent implements OnInit {
  private isNew = true;
  error = false;
  lesson: NewLessonModel = {
    title: '',
    description: '',
    duration: 0,
    creationDate: '',
    topRated: false
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
      this.lesson = this.lessonServise.getLessonById(lessonId);
    }
  }

  saveLesson() {
    const validationObj = Object.assign({}, this.lesson);
    delete validationObj.topRated;

    if (Object.keys(validationObj).some((key) => !this.lesson[key])) {
      this.error = true;
      return;
    }

    this.isNew ? this.lessonServise.createLesson(this.lesson) : this.lessonServise.updateLesson(this.lesson);
    this.router.navigate(['/lessons']);
  }
}
