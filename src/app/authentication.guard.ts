import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router'
import { AuthenticationService } from './authentication.service'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor (
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const user = this.authenticationService.getUser()
    if (user.role !== 'admin') {
      this.router.navigate(['login'])
      return false
    }
    if (!user) {
      this.router.navigate(['login'])
      return false
    }

    return true
  }
}
