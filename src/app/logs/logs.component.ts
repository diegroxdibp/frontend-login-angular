import { LogsService } from './../logs.service'
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  logs$: Observable<any>;
  constructor (public logsService: LogsService) { }

  ngOnInit (): void {
    this.logs$ = this.logsService.getLoginLogs()
  }

  openDialog (register) {
    console.log(register)
  }
}
