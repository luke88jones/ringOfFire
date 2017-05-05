import { DealerService, PlayersService, Card } from '.';
import { Player } from '../player';

export class GameState {
    currentPlayer: Player;
    currentCard: Card;
    remaingCardCount: number;
    kingsFound: number;
}
