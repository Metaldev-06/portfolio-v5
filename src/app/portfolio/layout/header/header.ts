import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Logo } from './component/logo/logo';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Logo],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
