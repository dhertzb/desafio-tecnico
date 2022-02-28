import { Component, Input, OnInit } from '@angular/core';
import { ISpecialist } from '../../models/SpecialistInfo.type';

@Component({
  selector: 'specialist-info',
  templateUrl: './SpecialistInfo.component.html',
  styleUrls: ['./SpecialistInfo.component.scss'],
})
export class SpecialistInfoComponent implements OnInit {
  @Input() specialist: ISpecialist;

  ngOnInit(): void {}
}
