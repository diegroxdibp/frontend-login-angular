import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from './.env';
import { User } from './models/user';
const USERS_ENDPOINT = `${API_ENDPOINT}api/users/`;
const ROLES_ENDPOINT = `${API_ENDPOINT}api/users/roles/`;
const STATUS_ENDPOINT = `${API_ENDPOINT}api/users/status/`;

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${USERS_ENDPOINT}id/${id}`);
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${USERS_ENDPOINT}email/${email}`);
  }

  makeAdmin(id: number): Observable<string> {
    return this.http.patch<string>(`${ROLES_ENDPOINT}${id}/admin`, {});
  }

  makeUser(id: number): Observable<string> {
    return this.http.patch<string>(`${ROLES_ENDPOINT}${id}/user`, {});
  }

  activate(id: number): Observable<string> {
    return this.http.patch<string>(`${STATUS_ENDPOINT}${id}/activate`, {});
  }

  deactivate(id: number): Observable<string> {
    return this.http.patch<string>(`${STATUS_ENDPOINT}${id}/deactivate`, {});
  }
}
