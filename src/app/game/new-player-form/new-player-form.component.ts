import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Player } from '../player';
import { PlayersService } from '../shared/players.service';

@Component({
  selector: 'rof-new-player-form',
  templateUrl: './new-player-form.component.html',
  styleUrls: ['./new-player-form.component.scss']
})
export class NewPlayerFormComponent implements OnInit {
  @Output() added: EventEmitter<Player> = new EventEmitter();

  player: Player;

  constructor(
    private playersService: PlayersService
  ) { }

  ngOnInit() {
    this.player = new Player();
  }

  onSubmit() {
    const playerToAdd = new Player();
    playerToAdd.name = this.player.name;
    this.playersService.addPlayer(playerToAdd);
    this.added.emit();
  }

}
