let firstCard= 10
let secondCard= 10

let sum=firstCard+secondCard
let hasBlackJack=false
let isAlive=true
let message=""

let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")

function startGame(){

    console.log("startGame is called")
    sumEl.textContent="Sum:"+sum
    cardEl.textContent="Cards:"+firstCard+" "+secondCard
    if(sum<=20){
        message="Do you want to draw a new card?"
    }
    else if(sum===21){
        message="Wohoo! You've got Blackjack!"
        hasBlackJack=true
    }
    else{
        message="You're out of game!"
        isAlive=false
    }
    messageEl.textContent=message
   
}

function newCard(){
    console.log("New card called")
    let newCard=7
    sum+=newCard
    startGame()

}