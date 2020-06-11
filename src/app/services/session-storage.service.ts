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
}
