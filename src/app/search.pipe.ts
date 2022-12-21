import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], args: string): any[] {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter((item:any)=>{
      // return JSON.stringify(item).toLowerCase().includes(args);
      // return item.toLowerCase().includes(args);
      return item.id.toString().includes(args) ||
      item.name.toLocaleLowerCase().includes(args) ||
      item.username.toLocaleLowerCase().includes(args) ||
      item.email.toLocaleLowerCase().includes(args) ||
      item.address.street.toLocaleLowerCase().includes(args) ||
      item.address.zipcode.includes(args)

    })
  }
}
