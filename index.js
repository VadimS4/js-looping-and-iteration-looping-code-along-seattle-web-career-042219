// Code your solutions in this file

// for loop
function writeCards(names, eventName) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return cards
}

// while loop
function countdown(integer) {
    let counter = integer;
    while (integer >= 0) {
        console.log(integer--);
    }
}