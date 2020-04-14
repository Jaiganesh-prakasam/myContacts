import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(array: Array<string>, args?: any): Array<string> {
    return array.sort(function (a, b) {
      console.log(args['property']);
      if (a[args['property']] < b[args['property']]) {
        return -1;
      } else if (a[args.property] > b[args.property]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
