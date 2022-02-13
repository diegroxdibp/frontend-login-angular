import { Component, OnInit } from '@angular/core'
import { Roles, User } from '../models/user'
import { RolesService } from '../roles.service'
import { UsersService } from '../users.service'

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  user: User;
  message: string;
  constructor (
    private usersService: UsersService,
    private rolesService: RolesService
  ) { }

  ngOnInit (): void {
  }

  searchUser (searchTerm) {
    console.log((searchTerm as HTMLInputElement).value)
    const term: number = parseInt((searchTerm as HTMLInputElement).value)
    this.usersService.getUserById(term).subscribe({
      next: (data) => {
        console.log(data)
        this.user = data
        this.message = null
      },
      error: (err) => {
        console.log(err)
        this.user = null
        this.message = err.error.message
      }
    })
  }

  userIsAdmin (): boolean {
    return this.user.role === Roles.Admin ?? true
  }

  makeAdmin () {
    this.rolesService.makeAdmin(this.user.user_id).subscribe({
      next: (data) => {
        console.log(data)
        this.message = data
        this.usersService.getUserById(this.user.user_id).subscribe(data => {
          this.user = data
        })
      },
      error: (err) => {
        console.log(err)
        this.message = err
      }
    })
  }

  makeUser () {
    this.rolesService.makeUser(this.user.user_id).subscribe({
      next: (data) => {
        console.log(data)
        this.message = data
        this.usersService.getUserById(this.user.user_id).subscribe(data => {
          this.user = data
        })
      },
      error: (err) => {
        console.log(err)
        this.message = err
      }
    })
  }
}
