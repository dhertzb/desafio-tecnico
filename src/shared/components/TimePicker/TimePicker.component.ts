import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'time-picker',
  templateUrl: './TimePicker.component.html',
  styleUrls: ['./TimePicker.component.scss'],
})
export class TimePickerComponent implements OnInit {
  @Input() times: string[][] = [];
  @Output() onPick = new EventEmitter();
  date: Date = new Date();

  ngOnInit(): void {}

  onClickTime(time: string) {
    this.onPick.emit({ time });
  }
}
