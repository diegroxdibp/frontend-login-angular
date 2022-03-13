import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { LoggedInfo } from './models/logged-info'

const AUTH_API = 'http://vps36197.publiccloud.com.br:3000/api/logs/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class LogsService {
  // eslint-disable-next-line no-useless-constructor
  constructor (private http: HttpClient) { }

  getLoginLogs (): Observable<LoggedInfo[]> {
    return this.http.get<LoggedInfo[]>(
      AUTH_API + 'login',
      httpOptions
    )
  }
}
