import { TestBed, inject } from '@angular/core/testing';

import { PlayersService } from './players.service';

describe('PlayersServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayersService]
    });
  });

  it('should ...', inject([PlayersService], (service: PlayersService) => {
    expect(service).toBeTruthy();
  }));
});
