import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialActionsComponent } from './special-actions.component';

describe('SpecialActionsComponent', () => {
  let component: SpecialActionsComponent;
  let fixture: ComponentFixture<SpecialActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
