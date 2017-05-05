import { TestBed, inject } from '@angular/core/testing';

import { ForfeitsService } from './forfeits.service';

describe('RulesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForfeitsService]
    });
  });

  it('should ...', inject([ForfeitsService], (service: ForfeitsService) => {
    expect(service).toBeTruthy();
  }));
});
