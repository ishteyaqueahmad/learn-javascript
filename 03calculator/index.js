let num1=8
let num2=2

let num1El=document.getElementById("num1-el");
let num2El=document.getElementById("num2-el");

let sumEl=document.getElementById("sum-el")

num1El.textContent=num1
num2El.textContent=num2

function add(){
    console.log("Add button clicked")
    sumEl.textContent=num1+num2

}

function substract(){
    console.log("substract button clicked")
    sumEl.textContent=num1-num2
}

function multiply(){
    console.log("multiply button clicked")
    sumEl.textContent=num1*num2
}
function divide(){
    console.log("divide button clicked")
    sumEl.textContent=num1/num2
}