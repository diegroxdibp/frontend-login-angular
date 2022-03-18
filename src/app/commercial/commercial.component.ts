import { Component, OnInit } from '@angular/core';
import { PanelService } from '../panel.service';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.scss'],
})
export class CommercialComponent implements OnInit {
  constructor(public panelService: PanelService) {}

  ngOnInit(): void {}
}
