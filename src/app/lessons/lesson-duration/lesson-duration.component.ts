import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-lesson-duration',
  templateUrl: './lesson-duration.component.html',
  styleUrls: ['./lesson-duration.component.styl'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => LessonDurationComponent), multi: true}
  ]
})
export class LessonDurationComponent implements ControlValueAccessor {
  @Input() fieldId;
  duration: number;
  onChange: (_: any) => void = (_: any) => {};
  onTouched: () => void = () => {};

  constructor() {}

  updateChanges() {
    this.onChange(this.duration);
  }

  writeValue(value: number): void {
    this.duration = value;
    this.updateChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
