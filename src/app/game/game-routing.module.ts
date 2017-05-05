import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './players/players.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameOverComponent } from './game-over/game-over.component';
import { GameGuard } from './shared';

const routes: Routes = [
  {
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'game-board',
    component: GameBoardComponent,
    canActivate: [GameGuard]
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
