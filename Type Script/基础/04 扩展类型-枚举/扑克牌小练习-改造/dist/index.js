"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createDeck() {
    const deck = [];
    for (let index = 0; index < 3; index++) {
        deck.push({
            mark: index,
            color: "♠️"
        });
        deck.push({
            mark: index,
            color: "♣️"
        });
        deck.push({
            mark: index,
            color: "♥️"
        });
        deck.push({
            mark: index,
            color: "♦️"
        });
    }
    return deck;
}
function printDeck(deck) {
    deck.forEach(card => {
        console.log(card.color + card.mark);
    });
}
// function findCards(color:Color){}
