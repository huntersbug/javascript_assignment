document.querySelector("form").addEventListener("submit",signin)
let signarr=JSON.parse(localStorage.getItem("signupdata"))


function signin()
{
    event.preventDefault()
   let inemail=document.querySelector("#name").value
   let inpass=document.querySelector("#pass").value

   for(var i=0;i<signarr.length;i++)
   {
       if(inemail==signarr[i].email&&inpass==signarr[i].password)
       {
           alert("login sucessfully")
           window.location.href="./index.html"
           break;

       }
       else if(signarr.length-1==i){
          alert("invalid crendential")
       }
   }
    
}