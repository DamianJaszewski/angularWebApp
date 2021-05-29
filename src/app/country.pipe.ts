import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class CountryPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[]{
    if (!searchText) return items;
    return items.filter((it: any)=> it.name === searchText);
  }
}
