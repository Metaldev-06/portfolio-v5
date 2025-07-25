import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-portfolio',
  imports: [RouterOutlet, Header],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {}
