import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';

import {ApiService} from '../../../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private api: ApiService) { }

  public upload(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.api.post('audio-to-text', formData);
  }
}
