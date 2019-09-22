import {Component, OnInit} from '@angular/core';
import {UploadFileService} from '../../shared/services/uploadFile/upload-file.service';
import {SpinnerVisibilityService} from 'ng-http-loader';
import {AppService} from '../../shared/services/app.service';

@Component({
  selector: 'app-transform-audio-file-to-text',
  templateUrl: './transform-audio-file-to-text.component.html',
  styleUrls: ['./transform-audio-file-to-text.component.scss']
})
export class TransformAudioFileToTextComponent implements OnInit {

  file: File;
  text: string;
  isLoaded = false;

  constructor(public uploadService: UploadFileService,
              private spinner: SpinnerVisibilityService,
              private app: AppService) {
  }

  ngOnInit() {
    this.file = this.app.audioToTextState.file;
    this.text = this.app.audioToTextState.text;
    this.isLoaded = true;
  }

  getFiles(value): void {
    this.file = value;
    this.app.audioToTextState.file = value;
  }

  closeDialog() {
    if (this.file) {
      this.spinner.show();
      this.uploadService.upload(this.file).subscribe(response => {
        this.text = response;
        this.app.audioToTextState.text = response;
        this.spinner.hide();
      }, () => {
        this.spinner.hide();
      });
    } else {

    }
  }

}
