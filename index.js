let messageEl = document.querySelector("#message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")
let startGame = document.querySelector("#start-game")
let newCard = document.querySelector("#new-card")

let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false

// Generate random card function
const randomCard = () => {
  let random = Math.floor(Math.random() * 13) + 1

  if (random > 10) {
    return 10
  } else if (random === 1) {
    return 11
  } else {
    return random
  }
}

// Create a start game function
startGame.addEventListener("click", () => {
  isAlive = true
  let firstCard = randomCard()
  let secondCard = randomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
})

// Create render game function
const renderGame = () => {
  cardsEl.textContent = "Cards: "
  for(let i = 0; i < cards.length; i++) {
    cardsEl.textContent += `${cards[i]} `
  }

  sumEl.textContent = `Sum: ${sum}`

  if(sum < 21) {
    messageEl.textContent = "Do you want another card?"
    isAlive = true
  } else if (sum === 21) {
    messageEl.textContent = "You have BLACKJACK"
    hasBlackJack = true
  } else {
    messageEl.textContent = "You're out of the game"
    isAlive = false
  }
 }

//  create new card function
newCard.addEventListener("click", () => {
  if(isAlive === true && hasBlackJack === false) {
    let anotherCard = randomCard()
    cards.push(anotherCard)
    sum += anotherCard
    renderGame()
  }
})