import { Component, OnInit } from '@angular/core'
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarOpened = false;
  isLoggedIn: boolean;
  constructor (public authService: AuthenticationService) { }

  ngOnInit (): void {
  }

  toggleNavbar(): void {
    this.navbarOpened = !this.navbarOpened;
  }
}
