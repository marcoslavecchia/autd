import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventshomePage } from './eventshome.page';

describe('EventshomePage', () => {
  let component: EventshomePage;
  let fixture: ComponentFixture<EventshomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventshomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventshomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
