import { Component, Input, forwardRef, ViewChild, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

import { LessonsService } from '../lessons.service';
import { AppState, authorsSelector } from '../../app.states';
import { AuthorModel } from '../author.model';

@Component({
  selector: 'app-lesson-author',
  templateUrl: './lesson-author.component.html',
  styleUrls: ['./lesson-author.component.styl'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => LessonAuthorComponent), multi: true}
  ]
})
export class LessonAuthorComponent {
  @Input() fieldId;

  @ViewChild('authorInput') fruitInput: ElementRef;

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  authorsInputModel;
  authorsIds: string[] = [];
  authors: AuthorModel[] = [];
  currentAuthors: AuthorModel[] = [];
  filteredAuthors: AuthorModel[] = [];

  onChange: (_: any) => void = (_: any) => {};
  onTouched: () => void = () => {};

  constructor(
    private store: Store<AppState>,
    private lessonService: LessonsService
  ) {}

  onAuthorInput(inputValue: string) {
    this.setFilteredAuthors(inputValue);
  }

  setAuthors() {
    this.store.pipe(select(authorsSelector)).subscribe((authors) => {
      if (authors) {
        this.authors = authors;
        this.authorsIds.forEach((id) => {
          this.currentAuthors.push(this.authors.find((author) => author.id === id));
        });
        this.setFilteredAuthors();
      } else {
        this.lessonService.getAuthors();
      }
    });
  }

  setFilteredAuthors(value?: string) {
    const newFilterdAuthors = [];

    this.authors.forEach((author) => {
      if (this.authorsIds.indexOf(author.id) === -1) {
        newFilterdAuthors.push(author);
      }
    });

    if (value) {
      const regex = new RegExp(value, 'ig');
      this.filteredAuthors = newFilterdAuthors.filter((author) => regex.test(author.name));
    } else {
      this.filteredAuthors = newFilterdAuthors;
    }
  }

  remove(removedAuthor: AuthorModel): void {
    this.currentAuthors = this.currentAuthors.filter((author) => author.id !== removedAuthor.id);
    this.setFilteredAuthors();
    this.updateChanges();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.currentAuthors.push(this.authors.find((author) => author.id === event.option.value));
    this.fruitInput.nativeElement.value = '';
    this.fruitInput.nativeElement.blur();
    this.setFilteredAuthors();
    this.updateChanges();
  }

  writeValue(value: string[]) {
    if (value && value.length) {
      this.authorsIds = value;
    }

    this.setAuthors();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateChanges() {
    this.onChange(this.currentAuthors.map((author) => author.id));
  }
}
