let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit(){
    for(let i=0;i<fruit.length;i++){
            if(fruit[i]==="🍎"){
                appleShelf.textContent+="🍎"
            }
            else{
                orangeShelf.textContent+="🍊"
            }
    }
}