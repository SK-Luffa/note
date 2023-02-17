import { log } from "console"

type Deck = NormalCard[]
type Color = "♥️" | "♠️" | "♦️" | "♣️"
type NormalCard = {
    color: Color
    mark: number
}
function createDeck(): Deck {
    const deck:Deck=[];
    for (let index = 1; index <14; index++) {
      
         deck.push({
           mark:index,
           color:"♠️"
       })
        deck.push({
            mark: index,
            color: "♣️"
        })
        deck.push({
            mark: index,
            color: "♥️"
        })
        deck.push({
            mark: index,
            color: "♦️"
        })
    }
    return deck
}

function printDeck(deck:Deck){
    deck.forEach(card=>{
    console.log(card.color+card.mark );
    
    })
}
const deck = createDeck()
printDeck(deck )
// function findCards(color:Color){}