import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
})
export class InitialsPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    value = value.split(' ');
    let name = value[0].charAt(0);
    if (value[1]) {
      name = name + value[1].charAt(0);
    }
    return name;
  }
}
