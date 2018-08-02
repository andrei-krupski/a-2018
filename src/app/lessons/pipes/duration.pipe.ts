import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(value: number): any {
    value = value || 0;
    return value >= 60 ? `${(value / 60).toFixed(0)}h ${value % 60}min` : `${value}min`;
  }
}
