import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISpecialist } from '../models/SpecialistInfo.type';

@Injectable({
  providedIn: 'root',
})
export class SpecialistsService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ISpecialist[]>('http://localhost:3000/specialists');
  }

  getTimes(params: {
    id: number | string;
    initalDate: string;
    endDate: string;
  }) {
    return this.http.get<string[][]>(
      `http://localhost:3000/specialists/${params.id}/schedule`
    );
  }

  createAppointment(body: { id: number | string; time: string }) {
    return this.http.post(`http://localhost:3000/specialists/appointment`, {
      specialistsId: body.id,
      time: body.time,
    });
  }
}
