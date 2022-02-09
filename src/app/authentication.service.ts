import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

const AUTH_API = 'http://localhost:3000/api/auth/'
const LOCAL_STORAGE_KEY = 'user'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // eslint-disable-next-line no-useless-constructor
  constructor (private http: HttpClient) {}

  register (email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'register',
      {
        email,
        password
      },
      httpOptions
    )
  }

  login (email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        email,
        password
      },
      httpOptions
    )
  }

  logout (): void {
    window.localStorage.removeItem(LOCAL_STORAGE_KEY)
  }

  getUser (): any {
    const user = window.localStorage.getItem(LOCAL_STORAGE_KEY)
    if (user) {
      return JSON.parse(user)
    }
  }

  isLoggedIn (): boolean {
    const user = this.getUser()
    return !!user
  }

  getToken (): any {
    const user = this.getUser()
    if (user) return user.token
  }

  saveUser (user: any): void {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user))
  }

  getRoles (): string[] {
    const user = this.getUser()
    return user.role
  }

  isAdmin (): boolean {
    const user = this.getUser()
    if (user) {
      return !!user.role.includes('admin')
    } else {
      return false
    }
  }
}
