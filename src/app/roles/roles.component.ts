import { Component, OnInit } from '@angular/core'
import { Roles, User } from '../models/user'
import { UsersService } from '../users.service'

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  user: User;
  constructor (private usersService: UsersService) { }

  ngOnInit (): void {
  }

  searchUser (searchTerm) {
    console.log((searchTerm as HTMLInputElement).value)
    const term: number = parseInt((searchTerm as HTMLInputElement).value)
    this.usersService.getUserById(term).subscribe(data => {
      console.log(data)
      this.user = data
    })
  }

  userIsAdmin (): boolean {
    return this.user.role === Roles.Admin ?? true
  }
}
