import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Card, ForfeitsService } from '../shared';

@Component({
  selector: 'rof-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() showCard: boolean;
  displaySuit: string;
  isRed = false;
  forfeit: string[];

  constructor(
    private forfeitsService: ForfeitsService
  ) { }

  ngOnInit() {
    this.setup();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setup();
  }

  setup() {
    this.displaySuit = `&${this.card.suit};`;
    this.isRed = !!(this.card.suit === 'hearts' || this.card.suit === 'diams');
    this.forfeit = this.forfeitsService.getForfeit(this.card.rank);
  }

}
