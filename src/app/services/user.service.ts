import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = `http://localhost:3000/user`

  constructor(private http: HttpClient) { }

  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  add(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }
}
