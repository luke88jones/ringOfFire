import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { GameRoutingModule } from './game-routing.module';
import { PlayersComponent } from './players/players.component';
import { NewPlayerFormComponent } from './new-player-form/new-player-form.component';

import { DealerService, PlayersService, ForfeitsService, GameStateService, GameGuard } from './shared';
import { GameBoardComponent } from './game-board/game-board.component';
import { CardComponent } from './card/card.component';
import { GameOverComponent } from './game-over/game-over.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    GameRoutingModule
  ],
  declarations: [PlayersComponent, NewPlayerFormComponent, GameBoardComponent, CardComponent, GameOverComponent],
  providers: [
    DealerService,
    ForfeitsService,
    GameGuard,
    GameStateService,
    PlayersService
  ]
})
export class GameModule { }
