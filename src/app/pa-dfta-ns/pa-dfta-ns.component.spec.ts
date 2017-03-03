/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaDftaNsComponent } from './pa-dfta-ns.component';

describe('PaDftaNsComponent', () => {
  let component: PaDftaNsComponent;
  let fixture: ComponentFixture<PaDftaNsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaDftaNsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaDftaNsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
