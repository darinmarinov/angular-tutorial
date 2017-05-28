/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RespondingToComponenEventComponent } from './responding-to-componen-event.component';

describe('RespondingToComponenEventComponent', () => {
  let component: RespondingToComponenEventComponent;
  let fixture: ComponentFixture<RespondingToComponenEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespondingToComponenEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondingToComponenEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
