import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PanelSourceModel } from '../models/panel-source';
import { PanelService } from '../panel.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss'],
})
export class PanelsComponent {
  response: string;
  history$: Observable<PanelSourceModel[]>;
  constructor(
    private panelService: PanelService,
    private clipboard: Clipboard
  ) {
    this.history$ = panelService.getPathHistory();
  }

  handleUrl(url: string): void {
    var pattern = /^((http|https|ftp):\/\/)/;

    if (!pattern.test(url)) {
      url = 'http://' + url;
    }
    console.log(url);
    this.panelService
      .setPath(url)
      .subscribe((res: string) => (this.response = res));
  }

  copyToClipboard(value: HTMLElement): void {
    this.clipboard.copy(value.innerText);
  }
}
