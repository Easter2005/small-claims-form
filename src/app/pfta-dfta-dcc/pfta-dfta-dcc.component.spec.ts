/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PftaDftaDccComponent } from './pfta-dfta-dcc.component';

describe('PftaDftaDccComponent', () => {
  let component: PftaDftaDccComponent;
  let fixture: ComponentFixture<PftaDftaDccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PftaDftaDccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PftaDftaDccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
