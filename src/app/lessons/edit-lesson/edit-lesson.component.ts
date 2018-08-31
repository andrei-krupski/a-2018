import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LessonsService } from '../lessons.service';
import * as lessonValidators from './validators';

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class EditLessonComponent implements OnInit {
  private lessonId = true;
  error = false;

  lessonForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    duration: new FormControl(0, [lessonValidators.durationValidator]),
    creationDate: new FormControl('', [Validators.required]),
    topRated: new FormControl(false),
    authors: new FormControl([], [lessonValidators.authorValidator])
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private lessonServise: LessonsService
  ) {}

  ngOnInit() {
    this.lessonId = this.route.snapshot.params.id;

    if (this.lessonId) {
      this.lessonServise.getLessonById(this.lessonId).subscribe((lesson => this.lessonForm.patchValue(lesson)));
    }
  }

  saveLesson() {
    if (this.lessonForm.invalid) {
      return;
    }

    const data = this.lessonId ? Object.assign({}, this.lessonForm.value, {id: this.lessonId}) : this.lessonForm.value;

    this.lessonServise[this.lessonId ? 'updateLesson' : 'createLesson'](data).subscribe(() => {
      this.router.navigate(['/lessons']);
    });
  }
}
