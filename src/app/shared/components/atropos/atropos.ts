import {
  AfterViewInit,
  Component,
  inject,
  input,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, NgClass } from '@angular/common';

import Atropos from 'atropos';
import 'atropos/css';

import { Project } from '@portfolio/pages/home/interfaces/home-data-response';

@Component({
  selector: 'app-atropos',
  imports: [NgClass],
  templateUrl: './atropos.html',
  styleUrl: './atropos.css',
})
export class AtroposComponent implements AfterViewInit, OnDestroy {
  public project = input.required<Project>();

  private readonly platformId = inject(PLATFORM_ID);

  private myAtropos: ReturnType<typeof Atropos> | null = null;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.myAtropos = Atropos({
        el: `.${this.project().documentId}`,
        activeOffset: 40,
        rotateXMax: 5,
        rotateYMax: 5,
        shadow: false,
      });
    }
  }

  ngOnDestroy(): void {
    this.myAtropos?.destroy();
  }
}
