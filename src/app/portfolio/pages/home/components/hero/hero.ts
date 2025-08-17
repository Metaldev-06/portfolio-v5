import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Download, Eye, LucideAngularModule } from 'lucide-angular';

import { TranslocoPipe } from '@jsverse/transloco';

import { CarouselSkills } from '../carousel-skills/carousel-skills';

import { HomeData } from '../../services/home-data';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule, CarouselSkills, TranslocoPipe, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly Download = Download;
  readonly Eye = Eye;

  private readonly _homeData = inject(HomeData);

  public get homeQuery() {
    return this._homeData.homeData;
  }
}
