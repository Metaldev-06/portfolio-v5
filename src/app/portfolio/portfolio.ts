import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-portfolio',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {}
