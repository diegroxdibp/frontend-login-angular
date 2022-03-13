import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINT } from './.env';
const ROLES_ENDPOINT = `${API_ENDPOINT}api/users/roles/`;
@Injectable({
  providedIn: 'root',
})
export class RolesService {
  constructor(private http: HttpClient) {}

  makeAdmin(id: number): Observable<string> {
    return this.http.patch<string>(`${ROLES_ENDPOINT}${id}/admin`, {});
  }

  makeUser(id: number): Observable<string> {
    return this.http.patch<string>(`${ROLES_ENDPOINT}${id}/user`, {});
  }
}
