import { effect, inject, Injectable, signal } from '@angular/core';
import { Locale } from '@core/enum/locale';
import { LocalStorage } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class LocaleAplication {
  private readonly _localStorage = inject(LocalStorage);

  private readonly _localeStorageKey = 'locale';
  private _locale = signal<Locale>(Locale.ES_AR);

  // Lista de locales soportados
  private readonly _availableLocales: Locale[] = [Locale.ES_AR, Locale.EN];

  constructor() {
    const storedLocale = this._localStorage.get<Locale>(this._localeStorageKey);

    if (storedLocale && this._availableLocales.includes(storedLocale)) {
      this._locale.set(storedLocale);
    }

    effect(() => {
      this._localStorage.set(this._localeStorageKey, this._locale());
    });
  }

  public readonly locale = this._locale.asReadonly();

  public setLocale(value: Locale) {
    if (this._availableLocales.includes(value)) {
      this._locale.set(value);
    } else {
      console.warn(`Locale ${value} no está en la lista de disponibles`);
    }
  }

  public toggleLocale() {
    const current = this._locale();
    const index = this._availableLocales.indexOf(current);

    const nextIndex =
      index === -1 || index === this._availableLocales.length - 1
        ? 0
        : index + 1;

    this._locale.set(this._availableLocales[nextIndex]);
  }

  // Método para listar todos los locales disponibles
  public getAvailableLocales(): Locale[] {
    return [...this._availableLocales];
  }
}
