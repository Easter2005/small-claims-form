/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaDftaSvdComponent } from './pa-dfta-svd.component';

describe('PaDftaSvdComponent', () => {
  let component: PaDftaSvdComponent;
  let fixture: ComponentFixture<PaDftaSvdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaDftaSvdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaDftaSvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
