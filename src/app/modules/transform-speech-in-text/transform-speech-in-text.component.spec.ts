import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformSpeechInTextComponent } from './transform-speech-in-text.component';

describe('TransformSpeechInTextComponent', () => {
  let component: TransformSpeechInTextComponent;
  let fixture: ComponentFixture<TransformSpeechInTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformSpeechInTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformSpeechInTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
