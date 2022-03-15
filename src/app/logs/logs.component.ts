import { User } from './../models/user';
import { LogsService } from './../logs.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggedInfo } from '../models/logged-info';
import { UsersService } from '../users.service';
import { MatDialog } from '@angular/material/dialog';
import { LogDetailsComponent } from '../log-details/log-details.component';
import { LogDetail } from '../models/log-detail';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent implements OnInit {
  logs$: Observable<LoggedInfo[]>;
  constructor(
    public logsService: LogsService,
    private usersService: UsersService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.logs$ = this.logsService.getLoginLogs();
  }

  // Dialog dimensions
  // Height = Screen height - Navbar size - Top and Bottom margins on design document together
  // Position, Starting from the top and offseting navbar and top margin = Navabar size + Top margin on document
  openDialog(loggedInfo: LoggedInfo): void {
    const userDetail$ = this.usersService.getUserByEmail(loggedInfo.email);
    const userDetailSubscription = userDetail$.subscribe((users: User[]) => {
      const user = users[0];
      const logDetail: LogDetail = { user, loggedInfo };
      console.log(logDetail);
      const dialogRef = this.dialog.open(LogDetailsComponent, {
        maxHeight: 'calc(100vh - 50px - 42px)',
        width: '750px',
        ariaLabel: 'User information',
        panelClass: 'dialog-box-movie-details',
        position: {
          top: '71px',
        },
        data: logDetail,
      });

      dialogRef.afterClosed().subscribe(() => {
        userDetailSubscription.unsubscribe();
      });
    });
  }
}
