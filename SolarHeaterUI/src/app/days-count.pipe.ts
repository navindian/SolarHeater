import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysCount'
})
export class DaysCountPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    const installDate=new Date(value);
    const currentDate=new Date();
    const timeDiff=currentDate.getTime()-installDate.getTime();
    const dayDiff=Math.round(Math.abs((timeDiff)/1000/60/60/24));
    return dayDiff+" days remaining";
  }

}
