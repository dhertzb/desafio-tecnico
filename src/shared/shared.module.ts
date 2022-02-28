import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarComponent } from './components/Avatar/avatar.component';
import { CardComponent } from './components/Card/card.component';
import { DateRollerComponent } from './components/DateRoller/DateRoller.component';
import { PageComponent } from './components/Page/page.component';
import { RatingComponent } from './components/Rating/rating.component';
import { SchedulerComponent } from './components/Scheduler/scheduler.component';
import { TimePickerComponent } from './components/TimePicker/TimePicker.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PageComponent,
    CardComponent,
    AvatarComponent,
    SchedulerComponent,
    RatingComponent,
    DateRollerComponent,
    TimePickerComponent,
  ],
  exports: [
    PageComponent,
    CardComponent,
    AvatarComponent,
    TimePickerComponent,
    SchedulerComponent,
    DateRollerComponent,
    CommonModule,
    RatingComponent,
  ],
})
export class SharedModule {}
