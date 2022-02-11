import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { LogDetail } from '../models/log-detail'

@Component({
  selector: 'app-log-details',
  templateUrl: './log-details.component.html',
  styleUrls: ['./log-details.component.scss']
})
export class LogDetailsComponent implements OnInit {
  constructor (
    public dialogRef: MatDialogRef<LogDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public logDetail: LogDetail
  ) { }

  ngOnInit (): void {
    console.log(this.logDetail)
  }

  closeDialog (): void {
    this.dialogRef.close()
  }
}
