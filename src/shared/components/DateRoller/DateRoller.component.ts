import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateService } from 'src/shared/services/date.service';

interface IDateColumn {
  dayByMonth: number;
  dayByWeek: string;
  month: string;
}

@Component({
  selector: 'date-roller',
  templateUrl: './DateRoller.component.html',
  styleUrls: ['./DateRoller.component.scss'],
})
export class DateRollerComponent implements OnInit {
  @Input() maxDays: number = 3;
  @Output() onChange = new EventEmitter();

  initalDate: Date = new Date();
  endDate: Date = new Date();
  dateColumns: Array<IDateColumn> = [];
  dates: Array<Date> = [];

  constructor(private $date: DateService) {}

  ngOnInit(): void {
    this.endDate.setDate(this.endDate.getDate() + this.maxDays);
    const dates = this.getDatesBetweenDates();
    this.dateColumns = this.getDateColumns(dates);

    this.onChange.emit({ dates: this.getFormatedDates(this.dates) });
  }

  onRoll(backOrFoward: string) {
    const step = backOrFoward == 'back' ? -this.maxDays : this.maxDays;

    this.initalDate.setDate(this.initalDate.getDate() + step);

    this.endDate.setDate(this.endDate.getDate() + step);

    this.dates = this.getDatesBetweenDates();
    this.dateColumns = this.getDateColumns(this.dates);

    this.onChange.emit({ dates: this.getFormatedDates(this.dates) });
  }

  getDatesBetweenDates(): Array<Date> {
    let dates: Array<Date> = [];
    const currentDate: Date = new Date(this.initalDate);

    while (currentDate < this.endDate) {
      dates = [...dates, new Date(currentDate)];
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  }

  getDateColumns(dates: Array<Date>): Array<IDateColumn> {
    return dates.map((date) => {
      return {
        dayByMonth: date.getDate(),
        dayByWeek: (this.$date.daysLabels as any)[date.getDay()],
        month: (this.$date.monthsLabels as any)[date.getMonth()],
      };
    });
  }

  getFormatedDates(dates: Array<Date>): Array<string> {
    return dates.map((date) => {
      return formatDate(date, 'shortDate', 'en-US');
    });
  }
}
