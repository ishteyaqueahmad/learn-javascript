//let inputEl= document.getElementById("input-el")


function saveInput(){
    console.log("Button clicked by onclick")
}

let inputBtn=document.getElementById("input-el")

inputBtn.addEventListener("click",function() {
    console.log("button clicked by event listner")
})