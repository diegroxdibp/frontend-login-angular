import { Component, OnInit } from '@angular/core';
import { IframeService } from '../iframe.service';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.scss'],
})
export class CommercialComponent implements OnInit {
  constructor(public iframe: IframeService) {}

  ngOnInit(): void {}
}
