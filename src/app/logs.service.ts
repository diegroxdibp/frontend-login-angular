import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

const AUTH_API = 'http://localhost:3000/api/logs/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class LogsService {
  // eslint-disable-next-line no-useless-constructor
  constructor (private http: HttpClient) { }

  getLoginLogs (): Observable<any> {
    return this.http.get(
      AUTH_API + 'login',
      httpOptions
    )
  }
}
