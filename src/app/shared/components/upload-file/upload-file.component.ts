import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  @ViewChild('file') uploadFile;

  @Input() file: File;
  filename: string;
  @Output() public filesEmit = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.filename = this.file ? this.file.name : 'File name';
  }

  onFilesAdded() {
    this.file = this.uploadFile.nativeElement.files[0];
    this.filename = this.file.name;
    this.filesEmit.emit(this.file);
  }

  addFiles() {
    this.uploadFile.nativeElement.click();
  }
}
