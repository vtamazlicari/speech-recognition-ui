import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import {MatButtonModule, MatCardModule, MatListModule, MatProgressBarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    UploadFileComponent
  ],
  exports: [
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule,
    MatProgressBarModule,
    MatCardModule
  ],
  providers: []
})
export class SharedModule { }
