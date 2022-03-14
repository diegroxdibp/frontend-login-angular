import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IframeService } from '../iframe.service';
import { SafePipe } from '../safe.pipe';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss'],
})
export class IframeComponent implements OnInit {
  itsSafe: boolean = false;
  path: SafeResourceUrl;
  private safePipe: SafePipe = new SafePipe(this.domSanitizer);
  // Private properties
  constructor(
    public iframe: IframeService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    console.log(this.iframe.path);
    this.path = this.safePipe.transform(this.iframe.path, 'resourceUrl');
    this.path ? (this.itsSafe = true) : (this.itsSafe = false);
  }
}
