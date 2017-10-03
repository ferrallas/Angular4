import { TestBed, inject } from '@angular/core/testing';

import { AguaServiceService } from './agua-service.service';

describe('AguaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AguaServiceService]
    });
  });

  it('should be created', inject([AguaServiceService], (service: AguaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
