import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatData'
})
export class FormatDataPipe implements PipeTransform {

  transform(value: any, start: number, end: number): any {
    return value.substr(0, start, end) + '...';
  }

}
