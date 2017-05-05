import { Component, OnInit } from '@angular/core';

import { Player } from '../player';
import { PlayersService } from '../shared/players.service';

@Component({
  selector: 'rof-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players: Player[];

  constructor(
    private playerService: PlayersService
  ) { }

  ngOnInit() {
    this.updatePlayers();
  }

  updatePlayers() {
    this.players = this.playerService.getPlayers();
  }

  removePlayer(index: number) {
    this.playerService.removePlayer(index);
    this.updatePlayers();
  }
}
