let ctr = 0;
function deleteTodo(index) {
  let delElement = document.querySelector(".todo-" + index);
  delElement.parentNode.removeChild(delElement);

  if(ctr === index) {
  ctr = ctr - 1;  
  }

}





function addTodo() {
    if(ctr === 0) {
        let vare = document.createElement("div");
        vare.setAttribute("class", "clear");
        let parentDelete = document.querySelector(".wrapper").appendChild(vare);
    }
    let addElement = document.querySelector(".input");
    let value = addElement.value;
    
    let El = document.createElement("div");
    ctr = ctr + 1;

    let newEl = document.querySelector(".clear").appendChild(El);

    newEl.innerHTML = '<div class="flex todo-' + ctr + '"> <h3>' + ctr + '. ' + value + '</h3><button onclick="deleteTodo(' + ctr + ')">Delete</button></div>'
}

function clearTodo() {
    const deleteElement = document.querySelector(".clear");
    deleteElement.parentNode.removeChild(deleteElement);
    ctr = 0;
}


