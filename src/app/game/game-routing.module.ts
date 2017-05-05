import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './players/players.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameOverComponent } from './game-over/game-over.component';

const routes: Routes = [
  {
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'game-board',
    component: GameBoardComponent
  },
  {
    path: 'game-over',
    component: GameOverComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
