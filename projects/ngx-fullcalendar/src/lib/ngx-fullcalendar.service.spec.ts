import { TestBed, inject } from '@angular/core/testing';

import { NgxFullcalendarService } from './ngx-fullcalendar.service';

describe('NgxFullcalendarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxFullcalendarService]
    });
  });

  it('should be created', inject([NgxFullcalendarService], (service: NgxFullcalendarService) => {
    expect(service).toBeTruthy();
  }));
});
