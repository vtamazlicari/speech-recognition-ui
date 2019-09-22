import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformAudioFileToTextComponent } from './transform-audio-file-to-text.component';

describe('TransformAudioFileToTextComponent', () => {
  let component: TransformAudioFileToTextComponent;
  let fixture: ComponentFixture<TransformAudioFileToTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformAudioFileToTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformAudioFileToTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
