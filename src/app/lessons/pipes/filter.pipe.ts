import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(dataArray: any[], text: string): any {
    return text ? dataArray.filter((item) => item.title.includes(text)) : dataArray;
  }
}
