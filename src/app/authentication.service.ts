import { API_ENDPOINT } from './.env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_ENDPOINT = `${API_ENDPOINT}api/auth/`;
const LOCAL_STORAGE_KEY = 'user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  register(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_ENDPOINT + 'register',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_ENDPOINT + 'login',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get(AUTH_ENDPOINT + 'login');
  }

  // Token - Local Storage

  logout(): void {
    window.localStorage.removeItem(LOCAL_STORAGE_KEY);
  }

  getUser(): any {
    const user = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (user) {
      return JSON.parse(user);
    }
  }

  isLoggedIn(): boolean {
    const user = this.getUser();
    return !!user;
  }

  getToken(): any {
    const user = this.getUser();
    if (user) return user.token;
  }

  saveUser(user: any): void {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
  }

  getRoles(): string[] {
    const user = this.getUser();
    return user.role;
  }

  isAdmin(): boolean {
    const user = this.getUser();
    if (user) {
      return !!user.role.includes('admin');
    } else {
      return false;
    }
  }
}
