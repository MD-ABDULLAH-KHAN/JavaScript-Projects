let cards = [firstCard,secondCard]
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerName = "MD"
let playerChips = 145
let playerElement = document.getElementById("player-el")
playerElement.textContent = playerName + ": $" + playerChips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if(randomNumber===1) return 11
    else if(randomNumber>=11) return 10
    else return randomNumber
}
     
function startGame(){
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum= firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " " 
    }
    sumEl.textContent="Sum: "+ sum
    if(sum<=20) {
    message = "Do you want to draw a new card?"
    }
    else if (sum===21) {
    message = "Woohoo! You've got BlackJack!"
    hasBlackjack=true
    }
    else {
    message = "You're out of the game!"
    isAlive=false
    }
    messageEl.textContent=message;
    
}
function newCard(){
    if(hasBlackjack===false && isAlive===true){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }  
}
