import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
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
export class AboutMe implements AfterViewInit, OnDestroy {
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

    const cards = this.interactiveCards.map((c) => c.nativeElement);
    const container = cards[0]?.parentElement;

    if (!container) return;

    const moveListener = this._renderer.listen(
      container,
      'mousemove',
      (e: MouseEvent) => {
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const isInside =
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;

          // Proximidad más generosa
          const proximityPadding = 100; // <== Aumentamos la zona de activación
          const proximity =
            e.clientX >= rect.left - proximityPadding &&
            e.clientX <= rect.right + proximityPadding &&
            e.clientY >= rect.top - proximityPadding &&
            e.clientY <= rect.bottom + proximityPadding;

          if (isInside || proximity) {
            const localX = Math.max(0, Math.min(x, rect.width));
            const localY = Math.max(0, Math.min(y, rect.height));

            card.style.setProperty('--x', `${localX}px`);
            card.style.setProperty('--y', `${localY}px`);
            card.style.setProperty('--opacity', isInside ? '1' : '0.8'); // más tenue en proximidad
          } else {
            card.style.setProperty('--opacity', '0');
          }
        });
      },
    );

    const leaveListener = this._renderer.listen(container, 'mouseleave', () => {
      cards.forEach((card) => {
        card.style.setProperty('--opacity', '0');
      });
    });

    this.listeners.push(moveListener, leaveListener);
  }

  ngOnDestroy() {
    this.listeners.forEach((unlisten) => unlisten());
    this.listeners = [];
  }
}
