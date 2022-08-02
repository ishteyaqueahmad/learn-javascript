let myLead=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("btn-el")
const ulEl=document.getElementById("ul-el")

inputBtn.addEventListener("click",function() {
    myLead.push(inputEl.value)
    inputEl.value=""
    renderList()
})

function renderList(){
    let listItems=""
    for(let i=0;i<myLead.length;i++){
        listItems+=`
            <li>
              <a target='_blank 'href='${myLead[i]}'>
                ${myLead[i]}
               </a>
            </li> `
    }
    ulEl.innerHTML=listItems
}



const repecient="James"
const email=`Hey ${repecient}! How is it going cheer peer`

console.log(email)