import {
  Component,
  ElementRef,
  inject,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';

import { HomeData } from '../../services/home-data';

@Component({
  selector: 'app-about-me',
  imports: [MarkdownModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  @ViewChildren('interactiveCard', { read: ElementRef })
  interactiveCards!: QueryList<ElementRef>;

  private readonly _homeData = inject(HomeData);
  private readonly _renderer = inject(Renderer2);
  private listeners: (() => void)[] = [];

  public get homeQuery() {
    return this._homeData.homeData;
  }

  ngAfterViewInit() {
    this.interactiveCards.changes.subscribe(() => {
      this.initializeListeners();
    });

    this.initializeListeners();
  }

  initializeListeners() {
    // Limpiar listeners previos
    this.listeners.forEach((unlisten) => unlisten());
    this.listeners = [];

    this.interactiveCards.forEach((cardRef) => {
      const card = cardRef.nativeElement;

      const moveListener = this._renderer.listen(
        card,
        'mousemove',
        (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          card.style.setProperty('--x', `${x}px`);
          card.style.setProperty('--y', `${y}px`);
          card.style.setProperty('--opacity', '1');
        },
      );

      const leaveListener = this._renderer.listen(card, 'mouseleave', () => {
        card.style.setProperty('--opacity', '0');
      });

      this.listeners.push(moveListener, leaveListener);
    });
  }
}
