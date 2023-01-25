let completedarr=JSON.parse(localStorage.getItem("completedtodo"))||[]
console.log(completedarr);
completedarr.map((e)=>{
    let tr=document.createElement("tr")
    let td1=document.createElement("td")
    td1.textContent=e.itemName
    let td2=document.createElement("td")
    td2.textContent= e.itemQty
    let td3=document.createElement("td")
    td3.textContent= e.itemPrior
    tr.append(td1,td2,td3)
    document.querySelector("tbody").append(tr)
})