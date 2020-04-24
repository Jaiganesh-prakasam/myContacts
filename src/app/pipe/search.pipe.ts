import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], terms: any): any {
    if (!items) return [];
    if (!terms) return items;
    terms = terms.toLowerCase();
    return items.filter((it) => {
      console.log(it._objectInstance.displayName);
      if (it._objectInstance.displayName) {
        return it._objectInstance.displayName.toLowerCase().includes(terms);
      }
    });
  }
}
