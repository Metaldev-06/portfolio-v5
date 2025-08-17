import { Component, inject, OnInit } from '@angular/core';
import { EducationsData } from './services/educations-data';

@Component({
  selector: 'app-educations',
  imports: [],
  templateUrl: './educations.html',
  styleUrl: './educations.css',
})
export default class Educations implements OnInit {
  private readonly _educationsData = inject(EducationsData);

  get educationsData() {
    return this._educationsData.educationsData;
  }

  ngOnInit() {
    this._educationsData.prefetchEducations(true);
  }
}
