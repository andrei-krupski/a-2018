import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-lesson-dialog',
  templateUrl: './delete-lesson-dialog.component.html',
  styleUrls: ['./delete-lesson-dialog.component.styl']
})
export class DeleteLessonDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteLessonDialogComponent>) {}

  setAnswer(answer: boolean) {
    this.dialogRef.close(answer);
  }
}
