import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  public addToSessionStorage(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  public getFromSessionStorage(key: string): any {
    return sessionStorage.getItem(key);
  }

  setItem(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key) {
    const value = sessionStorage.getItem(key);
    return JSON.parse(value);
  }

  deleteItem(key) {
    sessionStorage.removeItem(key);
  }
}
