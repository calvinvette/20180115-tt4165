import { TestBed, inject } from '@angular/core/testing';

import { CustomerRestStorageService } from './customer-rest-storage.service';

describe('CustomerRestStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerRestStorageService]
    });
  });

  it('should be created', inject([CustomerRestStorageService], (service: CustomerRestStorageService) => {
    expect(service).toBeTruthy();
  }));
});
