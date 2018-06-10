import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFullcalendarComponent } from './ngx-fullcalendar.component';

describe('NgxFullcalendarComponent', () => {
  let component: NgxFullcalendarComponent;
  let fixture: ComponentFixture<NgxFullcalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFullcalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFullcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
