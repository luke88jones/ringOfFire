import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { PlayersService } from './players.service';

@Injectable()
export class GameGuard implements CanActivate {

  constructor(
      private playersService: PlayersService,
      private router: Router
  ) { }

  canActivate() {
    if (this.playersService.getPlayers().length > 1) {
        return true;
    }
    this.router.navigate(['/new']);
    return false;
  }
}
