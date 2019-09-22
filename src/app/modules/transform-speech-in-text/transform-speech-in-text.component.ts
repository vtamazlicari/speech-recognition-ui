import { Component, OnInit } from '@angular/core';
import {SpeechRecognitionService} from '@kamiazya/ngx-speech-recognition';
import {AppService} from '../../shared/services/app.service';

@Component({
  selector: 'app-transform-speech-in-text',
  templateUrl: './transform-speech-in-text.component.html',
  styleUrls: ['./transform-speech-in-text.component.scss'],
})
export class TransformSpeechInTextComponent implements OnInit {

  message: string;
  started: boolean;

  constructor(public service: SpeechRecognitionService,
              private app: AppService) {
  }

  ngOnInit() {
    this.service.onstart = (e) => {
      console.log(e);
    };

    this.service.onresult = (e) => {
      this.message = e.results[0].item(0).transcript;
      this.app.speechToTextState.message = this.message;
    };
    this.message = this.app.speechToTextState.message;
    this.started = this.app.speechToTextState.started;
  }

  start() {
    this.started = true;
    this.app.speechToTextState.started = true;
    this.service.start();
  }

  stop() {
    this.started = false;
    this.app.speechToTextState.started = false;
    this.service.stop();
  }
}
