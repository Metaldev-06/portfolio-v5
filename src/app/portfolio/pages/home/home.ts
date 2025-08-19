import { Component, inject, OnInit } from '@angular/core';

import { Hero } from './components/hero/hero';
import { AboutMe } from './components/about-me/about-me';
import { RelevantProjects } from './components/relevant-projects/relevant-projects';
import { HomeData } from './services/home-data';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutMe, RelevantProjects],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home implements OnInit {
  private readonly _homeData = inject(HomeData);

  ngOnInit(): void {
    this._homeData.prefetchHome(true);
  }
}
