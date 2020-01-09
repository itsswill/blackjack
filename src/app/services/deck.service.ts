import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  suits: Array<string> = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
  values: any = [2, 3, 4, 5, 6, 7, 8, 9 , 10, 'Jack', 'Queen', 'King', 'Ace'];

  constructor() { }

  /**
   * Handles generating the deck
   * @returns array of the cards in the deck
   */
  generateDeck() {
    const deck = [];
    this.suits.forEach((v: string, k: number) => {
      this.values.forEach((val, key) => {
        deck.push({
          suit: v,
          value: val
        });
      });
    });
    return deck;
  }
}
