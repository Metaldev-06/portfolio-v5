import { Component } from '@angular/core';

import { Download, Eye, LucideAngularModule } from 'lucide-angular';

import { CarouselSkills } from '../carousel-skills/carousel-skills';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule, CarouselSkills],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly Download = Download;
  readonly Eye = Eye;
}
