import { Injectable } from '@angular/core';
import {AudioToTextPage} from '../models/audioToText.model';
import {SpeechToTextPage} from '../models/speechToText.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  audioToTextState: AudioToTextPage = new AudioToTextPage();
  speechToTextState: SpeechToTextPage = new SpeechToTextPage();

  constructor() { }

}
