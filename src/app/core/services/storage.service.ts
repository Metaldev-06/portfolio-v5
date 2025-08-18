import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage {
  private _storage: Storage | null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Solo asigna el objeto `localStorage` si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this._storage = localStorage;
    } else {
      this._storage = null;
    }
  }

  get<T>(key: string): T | null {
    if (!this._storage) {
      return null;
    }

    const value = this._storage.getItem(key);
    if (!value) return null;

    try {
      return JSON.parse(value) as T;
    } catch {
      console.warn(`LocalStorage: no se pudo parsear la clave "${key}"`);
      return null;
    }
  }

  set(key: string, value: unknown): void {
    if (this._storage) {
      this._storage.setItem(key, JSON.stringify(value));
    }
  }

  remove(key: string): void {
    if (this._storage) {
      this._storage.removeItem(key);
    }
  }

  clear(): void {
    if (this._storage) {
      this._storage.clear();
    }
  }
}
