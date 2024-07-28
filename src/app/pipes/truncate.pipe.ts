import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 10, completeWords: boolean = false, ellipsis: string = '...'): string {
    if (!value) return '';

    if (completeWords) {
      const words = value.split(' ');
      let truncated = '';

      for (let word of words) {
        if ((truncated + word).length > limit) break;
        truncated += (truncated ? ' ' : '') + word;
      }

      return truncated + ellipsis;
    }

    return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  }

}

