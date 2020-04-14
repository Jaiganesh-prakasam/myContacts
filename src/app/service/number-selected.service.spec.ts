import { TestBed } from '@angular/core/testing';

import { NumberSelectedService } from './number-selected.service';

describe('NumberSelectedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumberSelectedService = TestBed.get(NumberSelectedService);
    expect(service).toBeTruthy();
  });
});
