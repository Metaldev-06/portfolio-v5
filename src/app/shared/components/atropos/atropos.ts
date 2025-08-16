import { AfterViewInit, Component, input, OnDestroy } from '@angular/core';
import { NgClass } from '@angular/common';

import Atropos from 'atropos';
import 'atropos/css';

import { Project } from '@portfolio/pages/home/interfaces/home-data-response';
import { ProjectData } from '@portfolio/pages/projects/interfaces/projects-data-response';

@Component({
  selector: 'app-atropos',
  imports: [NgClass],
  templateUrl: './atropos.html',
  styleUrl: './atropos.css',
})
export class AtroposComponent implements AfterViewInit, OnDestroy {
  public project = input.required<Project>();
  private myAtropos: ReturnType<typeof Atropos> | null = null;

  ngAfterViewInit() {
    this.myAtropos = Atropos({
      el: `.${this.project().documentId}`,
      activeOffset: 40,
      // shadowScale: 1.05,
      rotateXMax: 5,
      rotateYMax: 5,
      shadow: false,
      // onEnter() {
      //   console.log('Enter');
      // },
      // onLeave() {
      //   console.log('Leave');
      // },
      // onRotate(x, y) {
      //   console.log('Rotate', x, y);
      // },
    });
  }

  ngOnDestroy(): void {
    this.myAtropos?.destroy();
  }
}
