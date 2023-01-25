document.querySelector("#form").addEventListener("submit", myFunction);

let todoList =JSON.parse(localStorage.getItem("todoData"))|| [];

function myFunction() {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var quantity = document.querySelector("#qty").value;
  var prior = document.querySelector("#priority").value;
   let todoObj = {
    itemName: name,
    itemQty: quantity,
    itemPrior: prior,
  };
  console.log(todoList);
 todoList.push(todoObj);
localStorage.setItem("todoData", JSON.stringify(todoList));
}
