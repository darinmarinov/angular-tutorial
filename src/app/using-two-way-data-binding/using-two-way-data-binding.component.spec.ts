/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsingTwoWayDataBindingComponent } from './using-two-way-data-binding.component';

describe('UsingTwoWayDataBindingComponent', () => {
  let component: UsingTwoWayDataBindingComponent;
  let fixture: ComponentFixture<UsingTwoWayDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingTwoWayDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingTwoWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
