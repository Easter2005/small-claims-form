/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PftaDnccComponent } from './pfta-dncc.component';

describe('PftaDnccComponent', () => {
  let component: PftaDnccComponent;
  let fixture: ComponentFixture<PftaDnccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PftaDnccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PftaDnccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
