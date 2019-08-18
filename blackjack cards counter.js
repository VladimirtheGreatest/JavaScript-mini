//Blackjack counting cards cheating simulator

var count = 0;

const play = () => count > 0 ? console.log(count + " " + "Bet") : console.log(count + " " + "Hold");


function cc(card) {
  let pluscount = [2, 3, 4, 5, 6]
  let minuscount = [10, 'J', 'Q','K', 'A']
  let neutralcount = [7, 8, 9]
  if (pluscount.includes(card)) {
    count += 1;
    play()
  } else if (minuscount.includes(card)) {
    count -= 1;
    play()
  } else if (neutralcount.includes(card)) {
    count += 0;
    play()
  } else {
    console.log ("not in the deck")
  }
}

// Add/remove cards to test it.

console.log(count);
cc('K');  //King
cc(2);     // deuce
cc(7);
cc('K');
cc('K');
cc('K');
