import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsnewtaskPage } from './eventsnewtask.page';

describe('EventsnewtaskPage', () => {
  let component: EventsnewtaskPage;
  let fixture: ComponentFixture<EventsnewtaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsnewtaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsnewtaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
