let count =0
let countEl=document.getElementById("count-el")
function increment(){
    count=count+1
    console.log(count)
    countEl.textContent=count
}