/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaDaComponent } from './pa-da.component';

describe('PaDaComponent', () => {
  let component: PaDaComponent;
  let fixture: ComponentFixture<PaDaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaDaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaDaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
