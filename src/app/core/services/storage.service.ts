import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage {
  private _storage: Storage = localStorage;

  get<T>(key: string): T | null {
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
    this._storage.setItem(key, JSON.stringify(value));
  }

  remove(key: string): void {
    this._storage.removeItem(key);
  }

  clear(): void {
    this._storage.clear();
  }
}
