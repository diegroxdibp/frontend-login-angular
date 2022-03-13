import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from './.env';
import { User } from './models/user';
const USERS_ENDPOINT = `${API_ENDPOINT}api/users/`;

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${USERS_ENDPOINT}id/${id}`);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${USERS_ENDPOINT}email/${email}`);
  }
}
