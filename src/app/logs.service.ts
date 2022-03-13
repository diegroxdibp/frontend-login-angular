import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from './.env';
import { LoggedInfo } from './models/logged-info';

const AUTH_ENDPOINT = `${API_ENDPOINT}api/logs/`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class LogsService {
  // eslint-disable-next-line no-useless-constructor
  constructor(private http: HttpClient) {}

  getLoginLogs(): Observable<LoggedInfo[]> {
    return this.http.get<LoggedInfo[]>(AUTH_ENDPOINT + 'login', httpOptions);
  }
}
