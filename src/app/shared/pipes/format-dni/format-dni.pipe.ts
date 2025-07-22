import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDni',
  standalone: true
})
export class FormatDniPipe implements PipeTransform {

  transform(value: string): string {
    const dividedDni = value.slice(0,4);
    return `${dividedDni}****`;
  }

}
