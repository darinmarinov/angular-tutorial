/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AccessChildComponentsFromTemplateComponent } from './access-child-components-from-template.component';

describe('AccessChildComponentsFromTemplateComponent', () => {
  let component: AccessChildComponentsFromTemplateComponent;
  let fixture: ComponentFixture<AccessChildComponentsFromTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessChildComponentsFromTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessChildComponentsFromTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
