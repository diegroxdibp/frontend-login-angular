import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { API_ENDPOINT } from './.env';
import { PanelSourceModel } from './models/panel-source';

const SOURCES_ENDPOINT = `${API_ENDPOINT}api/sources/`;

@Injectable({
  providedIn: 'root',
})
export class PanelService {
  constructor(private http: HttpClient) {}

  setPath(path: string): Observable<string> {
    return this.http.post<string>(SOURCES_ENDPOINT + 'path/set', { url: path });
  }

  getPath(): Observable<PanelSourceModel> {
    return this.http.get<PanelSourceModel>(SOURCES_ENDPOINT + 'path/get');
  }

  getPathHistory(): Observable<PanelSourceModel[]> {
    return this.http.get<PanelSourceModel[]>(SOURCES_ENDPOINT + 'path/history');
  }
}
