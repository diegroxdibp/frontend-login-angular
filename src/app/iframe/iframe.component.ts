import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IframeService } from '../iframe.service';
import { SafePipe } from '../safe.pipe';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss'],
})
export class IframeComponent implements OnInit {
  url: SafeResourceUrl;
  private safePipe: SafePipe = new SafePipe(this.domSanitizer);
  // Private properties
  constructor(
    public iframeService: IframeService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.handleUrl(this.iframeService.path);
  }

  handleUrl(url: string): void {
    var pattern = /^((http|https|ftp):\/\/)/;

    if (!pattern.test(url)) {
      url = 'http://' + url;
    }

    this.url = this.safePipe.transform(url, 'resourceUrl');
  }
}
