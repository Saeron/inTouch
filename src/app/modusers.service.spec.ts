import { TestBed } from '@angular/core/testing';

import { ModusersService } from './modusers.service';

describe('ModusersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModusersService = TestBed.get(ModusersService);
    expect(service).toBeTruthy();
  });
});
