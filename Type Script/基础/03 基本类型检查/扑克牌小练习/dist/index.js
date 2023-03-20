"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createDeck() {
    const deck = [];
    for (let index = 1; index < 14; index++) {
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
const deck = createDeck();
printDeck(deck);
// function findCards(color:Color){}
