import { Component, OnInit } from '@angular/core';
import { ISpecialist } from '../../models/SpecialistInfo.type';
import { SpecialistsService } from '../../services/Specialists.service';

@Component({
  selector: 'specialists-search-page',
  templateUrl: './Specialists.page.html',
  styleUrls: ['./Specialists.page.scss'],
})
export class SpecialistsSearchPage implements OnInit {
  specialists: Array<ISpecialist> = [];

  constructor(private $specialists: SpecialistsService) {}

  ngOnInit(): void {
    this.$specialists.getAll().subscribe((res) => {
      this.specialists = res;
    });
  }
}
