import { Component } from '@angular/core';

import { Hero } from './components/hero/hero';
import { AboutMe } from './components/about-me/about-me';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutMe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {}
