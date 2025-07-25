import { Component } from '@angular/core';

import { Hero } from './components/hero/hero';
import { AboutMe } from './components/about-me/about-me';
import { RelevantProjects } from './components/relevant-projects/relevant-projects';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutMe, RelevantProjects],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {}
