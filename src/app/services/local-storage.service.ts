import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  storage: Storage
  constructor() {
    this.storage = localStorage; //localstorage is of window's
  }

  save<T>(key: string, value:T) {
    this.storage.setItem(key,JSON.stringify(value));
  }

  get<T>(key: string) {
    const data = this.storage.getItem(key);
    if(!data) return undefined;
    return JSON.parse(data) as T;
  }

  clear() {
    this.storage.clear();
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }
}

