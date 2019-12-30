import { TestBed } from '@angular/core/testing';

import { PasswordSaverService } from './password-saver.service';

describe('PasswordSaverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasswordSaverService = TestBed.get(PasswordSaverService);
    expect(service).toBeTruthy();
  });
});
