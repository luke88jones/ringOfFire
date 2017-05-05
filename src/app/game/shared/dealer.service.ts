import { Injectable } from '@angular/core';

import { Card } from './card';

@Injectable()
export class DealerService {
  suits = ['hearts', 'diams', 'spades', 'clubs'];
  ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  deck: Card[] = [];
  kingsCount = 0;

  makeDeck() {
    this.deck = [];
    this.kingsCount = 0;
    this.suits.forEach(suit => {
      this.ranks.forEach(rank => {
        const card = new Card();
        card.suit = suit;
        card.rank = rank;

        this.deck.push(card);
      });
    });
  }

  drawCard() {
    if (this.deck.length > 0) {
      const cardIndex = Math.floor(Math.random() * this.deck.length);
      const card = this.deck.splice(cardIndex, 1)[0];
      if (card.rank === 'K') {
        this.kingsCount++;
      }
      return card;
    }
    return null;
  }

  getKingsCount() {
    return this.kingsCount;
  }

  getRemaingCards() {
    return this.deck.length;
  }
}
