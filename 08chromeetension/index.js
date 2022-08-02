//let inputEl= document.getElementById("input-el")


function saveInput(){
    console.log("Button clicked by onclick attribute")
}

let inputBtn=document.getElementById("btn-el")

inputBtn.addEventListener("click",function() {
    console.log("button clicked by event listner")
})