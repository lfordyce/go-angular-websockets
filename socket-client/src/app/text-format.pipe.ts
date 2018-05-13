import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormat'
})
export class TextFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    //  input.replace(/\ /g, '•').toUpperCase();
    return value.replace(/\ /g, '•').toUpperCase();
  }
}
