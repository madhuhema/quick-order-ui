import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../_models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url = `http://localhost:3000/item`
  constructor(private http: HttpClient) {
  }

  get(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.url}/${id}`);
  }
  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.url}/all`);
  }

  add(item: Item): Observable<Item> {
    return this.http.post<Item>(this.url, item);
  }

  update(item: Item): Observable<Item> {
    return this.http.put<Item>(this.url, item);
  }

  delete(id: number): Observable<Item> {
    return this.http.delete<Item>(`${this.url}/${id}`);
  }
}
