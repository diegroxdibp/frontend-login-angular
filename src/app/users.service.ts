import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { User } from './models/user'
const USERS_ENDPOINT = 'http://localhost:3000/api/users/'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor (private http: HttpClient) {}

  getUserById (id: number): Observable<User> {
    return this.http.get<User>(
      `${USERS_ENDPOINT}id/${id}`
    )
  }

  getUserByEmail (email: string): Observable<User> {
    return this.http.get<User>(
      `${USERS_ENDPOINT}email/${email}`
    )
  }
}
