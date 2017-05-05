import { Injectable } from '@angular/core';

import { Player } from '../player';

@Injectable()
export class PlayersService {
  players: Player[] = [];
  currentPlayerIndex: number;

  constructor() { }

  addPlayer(player: Player) {
    if (this.players) {
      this.players.push(player);
    } else {
      this.players = [player];
    }
    this.players = this.players.slice();
  }

  removePlayer(index: number) {
      this.players.splice(index, 1);
  }

  getPlayers() {
    return this.players;
  }

  getNextPlayer(): Player {
    if (this.currentPlayerIndex === undefined ||
      this.currentPlayerIndex === (this.players.length - 1)) {
      this.currentPlayerIndex = 0;
    } else {
      this.currentPlayerIndex++;
    }

    return this.players[this.currentPlayerIndex];
  }
}
