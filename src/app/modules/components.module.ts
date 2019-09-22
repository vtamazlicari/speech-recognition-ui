import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TransformSpeechInTextComponent} from './transform-speech-in-text/transform-speech-in-text.component';
import {TransformAudioFileToTextComponent} from './transform-audio-file-to-text/transform-audio-file-to-text.component';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {RxSpeechRecognitionService, SpeechRecognitionModule, SpeechRecognitionService} from '@kamiazya/ngx-speech-recognition';
import { WelcomeComponent } from './welcome/welcome.component';
import { SpecialActionsComponent } from './special-actions/special-actions.component';

@NgModule({
  declarations: [
    TransformSpeechInTextComponent,
    TransformAudioFileToTextComponent,
    WelcomeComponent,
    SpecialActionsComponent
  ],
  exports: [
    TransformSpeechInTextComponent,
    TransformAudioFileToTextComponent,
    WelcomeComponent,
    SpecialActionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    SpeechRecognitionModule.withConfig({
      lang: 'en-US',
      interimResults: true,
      maxAlternatives: 1000000000000000,
      continuous: true
    }),
  ],
  providers: [
    SpeechRecognitionService,
    RxSpeechRecognitionService
  ],
})
export class ComponentsModule { }
