/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PasingDataIntoAComponentComponent } from './pasing-data-into-a-component.component';

describe('PasingDataIntoAComponentComponent', () => {
  let component: PasingDataIntoAComponentComponent;
  let fixture: ComponentFixture<PasingDataIntoAComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasingDataIntoAComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasingDataIntoAComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
