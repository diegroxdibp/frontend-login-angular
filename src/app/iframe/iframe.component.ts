import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PanelService } from '../panel.service';
import { SafePipe } from '../safe.pipe';
import { PanelSourceModel } from '../models/panel-source';
@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss'],
})
export class IframeComponent {
  url: SafeResourceUrl;
  private safePipe: SafePipe = new SafePipe(this.domSanitizer);
  // Private properties
  constructor(
    public panelService: PanelService,
    private domSanitizer: DomSanitizer
  ) {
    this.panelService.getPath().subscribe((data: PanelSourceModel) => {
      console.log(data.url);
      this.sanitizeUrl(data.url);
    });
  }

  sanitizeUrl(url: string): void {
    this.url = this.safePipe.transform(url, 'resourceUrl');
  }
}
