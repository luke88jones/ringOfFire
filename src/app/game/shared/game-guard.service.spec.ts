import { TestBed, inject } from '@angular/core/testing';

import { GameGuard } from './game-guard.service';

describe('GameGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameGuard]
    });
  });

  it('should ...', inject([GameGuard], (service: GameGuard) => {
    expect(service).toBeTruthy();
  }));
});
