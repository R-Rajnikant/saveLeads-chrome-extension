
let myLeads=[]
let input=document.getElementById("input-text")
let tabBtn=document.getElementById("tab-btn")

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        renderLeads()
    })
})


const ulEl=document.getElementById("ul-el")
let leadsfromlocalstorage=JSON.parse(localStorage.getItem("myLeads"))
if(leadsfromlocalstorage){
    myLeads=leadsfromlocalstorage
    renderLeads()
}
let deleteBtn=document.getElementById("delete-btn")
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    renderLeads()
})

let savebtn= document.getElementById("save-btn")
savebtn.addEventListener("click" ,function (){
    
    myLeads.push(input.value)
    input.value=""
    renderLeads()
    localStorage.setItem("myLeads",JSON.stringify(myLeads)) 
})

function renderLeads(){
    let listitems=""
    for(let i=0;i<myLeads.length;i++){
        listitems+=  `
        <li>
          <a target='_blank' href=' ${myLeads[i]}'>
              ${myLeads[i]}
          </a>
        
        </li>
        `
    
    }
    ulEl.innerHTML=listitems
}