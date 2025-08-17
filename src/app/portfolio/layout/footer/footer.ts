import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TranslocoPipe } from '@jsverse/transloco';

import {
  Github,
  LinkedinIcon,
  LucideAngularModule,
  Twitter,
} from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule, RouterLink, TranslocoPipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly Github = Github;
  readonly Twitter = Twitter;
  readonly Linkedin = LinkedinIcon;

  public readonly currentYear = new Date().getFullYear();
}
