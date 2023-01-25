let todoItems = JSON.parse(localStorage.getItem("todoData")) || [];
let arr = JSON.parse(localStorage.getItem("completedtodo")) || [];
todoItems.map((e, index) => {
  let trow = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  td4.addEventListener("click", function () {
    completedtodo(e, index);
  });
  td1.textContent = e.itemName;
  td2.textContent = e.itemQty;
  td3.textContent = e.itemPrior;
  td4.textContent = "Completed";
  trow.append(td1, td2, td3, td4);
  document.querySelector("tbody").append(trow);
});

let completedtodo = (e, index) => {
  arr.push(e);

  localStorage.setItem("completedtodo", JSON.stringify(arr));
};
