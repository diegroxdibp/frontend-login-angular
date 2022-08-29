import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../users.service';
import { STATUS } from '../enums/status.enum';
import { ROLES } from "../enums/roles.enum";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})

export class UsersComponent implements OnInit {
  users: User[];
  message: string;
  searchTerm: string;

  public get STATUS(): typeof STATUS {
    return STATUS;
  }

  public get ROLES(): typeof ROLES {
    return ROLES;
  }

  constructor(private usersService: UsersService) {}

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
    return user.role === ROLES.ADMIN ?? true;
  }

  makeAdmin(user: User) {
    this.usersService.makeAdmin(user.user_id).subscribe({
      next: (data) => {
        console.log(data);
        this.message = data;
        const usersListCopy = [...this.users];
        this.users.forEach((cachedUser: User) => {
          if (cachedUser.user_id === user.user_id) {
            usersListCopy[this.users.indexOf(cachedUser)].role = ROLES.ADMIN;
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
    this.usersService.makeUser(user.user_id).subscribe({
      next: (data) => {
        console.log(data);
        this.message = data;
        const usersListCopy = [...this.users];
        this.users.forEach((cachedUser: User) => {
          if (cachedUser.user_id === user.user_id) {
            usersListCopy[this.users.indexOf(cachedUser)].role = ROLES.ADMIN;
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

  activateUser(user: User) {
    this.usersService.activate(user.user_id).subscribe({
      next: (data) => {
        console.log(data);
        this.message = data;
        const usersListCopy = [...this.users];
        this.users.forEach((cachedUser: User) => {
          if (cachedUser.user_id === user.user_id) {
            usersListCopy[this.users.indexOf(cachedUser)].status = STATUS.ACTIVE;
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

  deactivateUser(user: User) {
    this.usersService.deactivate(user.user_id).subscribe({
      next: (data) => {
        console.log(data);
        this.message = data;
        const usersListCopy = [...this.users];
        this.users.forEach((cachedUser: User) => {
          if (cachedUser.user_id === user.user_id) {
            usersListCopy[this.users.indexOf(cachedUser)].status = STATUS.INACTIVE;
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
