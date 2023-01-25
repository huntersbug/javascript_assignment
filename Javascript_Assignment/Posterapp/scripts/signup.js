document.getElementById("btn").addEventListener("submit",storeinfo)
let arr=JSON.parse(localStorage.getItem("signupdata"))||[]

let upname;

let upnumber;
let upemail;
let uppassword;


function storeinfo(){
    event.preventDefault()
 upname=document.getElementById("name").value
 upnumber=document.getElementById("no").value
 upemail=document.getElementById("email").value
 uppassword=document.getElementById("pass").value
let obj=
   {
    name:upname,
    number:upnumber,
    email:upemail,
    password:uppassword
    }
  arr.push(obj)
localStorage.setItem("signupdata",JSON.stringify(arr))
location.reload();
}
