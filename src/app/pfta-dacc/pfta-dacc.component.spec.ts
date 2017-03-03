/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PftaDaccComponent } from './pfta-dacc.component';

describe('PftaDaccComponent', () => {
  let component: PftaDaccComponent;
  let fixture: ComponentFixture<PftaDaccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PftaDaccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PftaDaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
