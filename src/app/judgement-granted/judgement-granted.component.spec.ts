import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgementGrantedComponent } from './judgement-granted.component';

describe('JudgementGrantedComponent', () => {
  let component: JudgementGrantedComponent;
  let fixture: ComponentFixture<JudgementGrantedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudgementGrantedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgementGrantedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
