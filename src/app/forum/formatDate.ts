import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatDate'
})
export class formatDatePipe implements PipeTransform {

  transform(value: Date): string {
    console.log(value)
    let today = moment();
    let date = new Date(value);
    let updated_at = moment(date);
    console.log(date)
    let years = today.diff(updated_at, 'years');
    let months = today.subtract(years, 'years').diff(updated_at, 'months');
    let days = today.subtract(years, 'years').diff(updated_at, 'days');
    console.log(value, years, months, days);
    return this.getHtml(value, years, months, days);
  }
  getHtml(value, years, months, days) {
    let html: string = '';
    let mois: string = '';
    let ans: string = '';
    let jours: string = '';
    if (months >= 1)
      mois = "," + months + " MONTH";
    if (years >= 1) {
      if (years === 1) ans = years + " YEAR"
      else ans = years + " YEARS"
    }
    if (days >= 1)
      jours = days + " j";
    html += (ans || mois) ? " (" + ans + "" + mois + ")" :(jours) ? " (" + jours + ")":jours;
    return html;
  }

}
