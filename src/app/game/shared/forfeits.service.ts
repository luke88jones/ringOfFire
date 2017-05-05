import { Injectable } from '@angular/core';

import { Forfeits } from './forfeits';
import { DealerService } from './dealer.service';

@Injectable()
export class ForfeitsService {

  constructor(
    private dealerService: DealerService
  ) { }

  getForfeit(rank: string): string[] {
    if (rank === 'K' && this.dealerService.getKingsCount() === 3) {
      return ['', `You've picked the last King, dring the contents of the cup. Good luck!`];
    }
    return Forfeits[rank];
  }

}
