import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(arrNumber: number[], ...args: any): unknown {
    // sap xep tang dan
    arrNumber.sort((a, b) => {
        if (a > b) {
        return 1;
        } else if (a < b) {
        return -1;
        } else {
        return 0;
        }
    });
    if (args == -1) {
        arrNumber.reverse();
    }
    return arrNumber;
  }

}
