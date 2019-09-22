import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected URL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getHeaders(isFile?) {
    let ContentType = 'application/json';
    if (isFile) {
      ContentType = 'multipart/form-data';
    }

    return {
      headers: new HttpHeaders({
        ContentType
      }),
    };
  }

  post(path: string, body: object, isFile?: boolean): Observable<any> {
    return this._request('POST', path, body, this.getHeaders(isFile), isFile);
  }

  private getParams(params?: object): HttpParams {
    let paramsToSend: HttpParams = new HttpParams();

    if (params) {
      for (const [key, value] of Object.entries(params)) {
        paramsToSend = paramsToSend.append(key, value as string);
      }
    }

    return paramsToSend;
  }

  private _request(method: string, path: string, body?: any, options?: any, isFile?: boolean): Observable<any> {

    if (!options) {
      options = {};
    }

    const url = `${this.URL}/${path}`;
    const params = options.params && this.getParams(options.params);

    const optionsToSend = Object.assign(options, {
      url,
      body,
      params,
    });
    if (isFile) {
      optionsToSend.observe = 'response';
    }

    return Observable.create((observer) => {
      return this.http.request(method, url, optionsToSend).subscribe(
        (res) => {
          observer.next(res);
          observer.complete();
        },
        (err: HttpErrorResponse) => {
          observer.error(err);
        });
    });
  }
}
