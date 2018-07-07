import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {
  transform(dataArray: any[]): any {
    return dataArray.sort((a, b) => new Date(a.creationDate) < new Date(b.creationDate) ? 1 : -1);
  }
}
