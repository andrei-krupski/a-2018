import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-lesson-date',
  templateUrl: './lesson-date.component.html',
  styleUrls: ['./lesson-date.component.styl'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => LessonDateComponent), multi: true}
  ]
})
export class LessonDateComponent implements ControlValueAccessor {
  @Input() fieldId;
  date: string;
  onChange: (_: any) => void = (_: any) => {};
  onTouched: () => void = () => {};

  constructor() {}

  updateChanges() {
    this.onChange(this.date);
  }

  writeValue(value: string): void {
    this.date = value;
    this.updateChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
