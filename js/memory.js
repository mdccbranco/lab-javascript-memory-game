class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  
  shuffleCards() {
    // let random;
    // const suffledCards = [];
    // for (let i=0 , size = this.cards.length; i < size; i+=1){
    //   random = Math.floor(Math.random()*size);
    //   while(suffledCards.includes(this.cards[random])){
    //     random = Math.floor(Math.random()*size);
    //   }
    //   suffledCards.push(this.cards[random])
    // }
    // return suffledCards;
    this.cards.sort(() => 0.5 - Math.random());
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if(card1 === card2){
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }

  isFinished() {
    if(this.pairsGuessed === this.cards.length/2){
      return true;
    }
    return false;
  }
}
