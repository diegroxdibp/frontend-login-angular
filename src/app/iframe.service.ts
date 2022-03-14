import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IframeService {
  path: string;
  constructor() {}

  setPath(iframePath: string) {
    this.path = iframePath;
  }
}
