import { Component, OnInit } from '@angular/core';
import { SpecialistsService } from 'src/domain/specialists/services/Specialists.service';
import { DateService } from 'src/shared/services/date.service';

@Component({
  selector: 'scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
})
export class SchedulerComponent implements OnInit {
  date: Date = new Date();
  utc: number = this.date.getTimezoneOffset() / -60;
  times: string[][] = [];
  timezone: string = '';

  ngOnInit(): void {}

  constructor(
    private $specialists: SpecialistsService,
    public $date: DateService
  ) {
    this.timezone = ($date.timezones as any)[this.utc];
  }

  getAvailableTimesByDates(dates: Array<string>) {
    this.$specialists
      .getTimes({ id: 1, initalDate: dates[0], endDate: dates[dates.length] })
      .subscribe((times) => {
        this.times = times;
      });
  }

  createAppointmentByTime(time: string): void {
    this.$specialists.createAppointment({ id: 1, time });
    alert(JSON.stringify(time));
  }
}
