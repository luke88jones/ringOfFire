import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Card, GameStateService, GameState } from '../shared';
import { Player } from '../player';

@Component({
    selector: 'rof-game-board',
    templateUrl: './game-board.component.html',
    styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
    currentPlayer: Player;
    cardDrawn = false;
    card: Card = null;
    gameEnded = true;
    kings = 0;
    remaingCards = 52;
    state: GameState;

    constructor(
        private gameStateService: GameStateService,
        private router: Router
    ) { }

    private updateState() {
        this.state = this.gameStateService.startTurn();
    }

    ngOnInit() {
        this.gameStateService.startGame();
        this.updateState();
    }

    showCard() {
        this.cardDrawn = true;
        this.kings = this.state.kingsFound;
        this.remaingCards = this.state.remaingCardCount;
    }

    nextTurn() {
        this.cardDrawn = false;
        this.updateState();
        if (this.state.remaingCardCount === 0) {
            this.router.navigate(['/game-over']);
        }
    }

    getHeight() {
        const height = this.kings * 33.75;
        return `${height}px`;
    }
}
