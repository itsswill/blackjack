import { Component, OnInit, Input } from '@angular/core';
import { DeckService } from '../../services/deck.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  deck = [];
  player1 = [];
  player2 = [];
  winner = '';

  constructor(private deckServ: DeckService) { }

  ngOnInit() {
    this.deck = this.deckServ.generateDeck();
    this.deck = this.assignPointsToCard(this.deck);
    console.log(this.deck);
  }

  /**
   * Handles shuffling cards in the deck
   * @param arr is the array
   * @returns deck of cards shuffled..
   */
  shuffleDeck(arr) {
    let currentIndex = arr.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
    return this.deck;
  }

  /**
   * Handles dealing the cards in the deck
   * @returns the new hands for each player..
   */
  deal() {
    const hand = [];
    while (hand.length < 2) {
      hand.push(this.deck.pop());
    }
      return hand;
  }

  /**
   * Handles assigning the hands to each player...
   */
  assignCard() {
    this.player1 = this.deal();
    this.player2 = this.deal();

    this.showWinner();
  }

  /**
   * Handles assigning the points to each card in deck...
   * @param deck... is the deck being used
   * @returns new Deck with points assigned
   */
  assignPointsToCard(deck: Array<any>) {
    const newDeck = [];
    deck.forEach((v, k) => {
      switch (v.value) {
        case 'Jack':
        case 'Queen':
        case 'King':
          newDeck.push({suit: v.suit, value: v.value, points: '10'});
          break;
        case 'Ace':
          newDeck.push({suit: v.suit, value: v.value, points: '11'});
          break;
        default:
          newDeck.push({suit: v.suit, value: v.value, points: v.value});
      }
    });
    return newDeck;
  }

  /**
   * Gets the sum of both card points in 1 hand
   * @param hand
   * @returns {string}
   */
  getSumOfPoints(hand) {
    let handsum = '';
    const firstCard = hand[0];
    const secondCard = hand[1];
    handsum = parseInt(firstCard.points) + parseInt(secondCard.points);
    console.log(handsum);
    return handsum;
  }

  showWinner() {
    const p1 = this.getSumOfPoints(this.player1);
    const p2 = this.getSumOfPoints(this.player2);

    if ( p1 > p2 ) {
      this.winner = `player 1 is the winner with ${p1} Points`;
    } else {
      this.winner = `player 2 is the winner with ${p2} Points`;
    }


  }

}
