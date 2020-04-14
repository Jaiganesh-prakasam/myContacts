import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(array: Array<string>, args?: any): Array<string> {
    return array.sort(function (a, b) {
      // console.log(a);
      if (
        a[args['property1']][args['property2']] <
        b[args['property1']][args['property2']]
      ) {
        return -1;
      } else if (
        a[args['property1']][args['property2']] >
        b[args['property1']][args['property2']]
      ) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
