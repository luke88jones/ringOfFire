import { Injectable } from '@angular/core';
// import { DealerService, PlayersService, GameState } from '.';

import { DealerService } from './dealer.service';
import { PlayersService } from './players.service';
import { GameState } from './game-state';

@Injectable()
export class GameStateService {

  constructor(
      private dealerService: DealerService,
      private playersService: PlayersService
  ) { }

  private getState() {
    return {
        currentCard: this.dealerService.drawCard(),
        currentPlayer: this.playersService.getNextPlayer(),
        kingsFound: this.dealerService.getKingsCount(),
        remaingCardCount: this.dealerService.getRemaingCards()
    };
  }

  startTurn(): GameState {
      return this.getState();
  }

  startGame(): void {
    this.dealerService.makeDeck();
  }
}
