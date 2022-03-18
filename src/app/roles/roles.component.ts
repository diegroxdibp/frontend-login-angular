import { Component, OnInit } from '@angular/core';
import { Roles, User } from '../models/user';
import { RolesService } from '../roles.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  users: User[];
  message: string;
  searchTerm: string;
  constructor(
    private usersService: UsersService,
    private rolesService: RolesService
  ) {}

  ngOnInit(): void {}

  defineSearchTerm(term: string): void {
    this.searchTerm = term;
  }

  searchUser(searchTerm?: HTMLInputElement | string) {
    if (typeof searchTerm !== 'string')
      this.defineSearchTerm((searchTerm as HTMLInputElement).value);
    console.log(this.searchTerm);
    this.usersService.getUserByEmail(this.searchTerm).subscribe({
      next: (data) => {
        console.log(data);
        this.users = data;
        this.message = null;
      },
      error: (err) => {
        console.log(err);
        this.users = null;
        this.message = err.error.message;
      },
    });
  }

  userIsAdmin(user: User): boolean {
    return user.role === Roles.Admin ?? true;
  }

  makeAdmin(user: User) {
    this.rolesService.makeAdmin(user.user_id).subscribe({
      next: (data) => {
        console.log(data);
        this.message = data;
        const usersListCopy = [...this.users];
        this.users.forEach((cachedUser: User) => {
          if (cachedUser.user_id === user.user_id) {
            usersListCopy[this.users.indexOf(cachedUser)].role = Roles.Admin;
          }
          console.log(usersListCopy);
        });
      },
      error: (err) => {
        console.log(err);
        this.message = err;
      },
    });
  }

  makeUser(user: User) {
    this.rolesService.makeUser(user.user_id).subscribe({
      next: (data) => {
        console.log(data);
        this.message = data;
        const usersListCopy = [...this.users];
        this.users.forEach((cachedUser: User) => {
          if (cachedUser.user_id === user.user_id) {
            usersListCopy[this.users.indexOf(cachedUser)].role = Roles.User;
          }
          console.log(usersListCopy);
        });
      },
      error: (err) => {
        console.log(err);
        this.message = err;
      },
    });
  }
}
