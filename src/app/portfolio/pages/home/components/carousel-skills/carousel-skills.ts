import { Component, inject } from '@angular/core';
import { HomeData } from '../../services/home-data';

@Component({
  selector: 'app-carousel-skills',
  imports: [],
  templateUrl: './carousel-skills.html',
  styleUrl: './carousel-skills.css',
})
export class CarouselSkills {
  private readonly _homeData = inject(HomeData);

  public get homeQuery() {
    return this._homeData.homeData;
  }
}
