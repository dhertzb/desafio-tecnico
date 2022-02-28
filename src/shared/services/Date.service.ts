import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  daysLabels: Object = {
    0: 'Dom',
    1: 'Seg',
    2: 'Ter',
    3: 'Quar',
    4: 'Qui',
    5: 'Sex',
    6: 'Sab',
  };

  monthsLabels: Object = {
    1: 'Jan',
    2: 'Fev',
    3: 'Mar',
    4: 'Abr',
    5: 'Maio',
    6: 'Jun',
    7: 'Jul',
    8: 'Ago',
    9: 'Set',
    10: 'Out',
    11: 'Nov',
    12: 'Dez',
  };

  timezones: Object = {
    '-3': 'São Paulo',
  };
}
