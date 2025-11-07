let ctr = 0;
function deleteTodo(index) {
  let delElement = document.querySelector(".todo-" + index);
  delElement.parentNode.removeChild(delElement);

  let clearDiv = document.querySelector(".clear");

if(clearDiv.innerHTML === "") {
    ctr = 0;
    clearDiv.parentNode.removeChild(clearDiv);
}

if(ctr === index){
  ctr = ctr - 1;  
}



}





function addTodo() {
    if(ctr === 0) {
        let vare = document.createElement("div");
        vare.setAttribute("class", "clear");
        let parentDelete = document.querySelector(".wrapper").appendChild(vare);
    }
    ctr = ctr + 1;
    let addElement = document.querySelector(".input");
    let value = addElement.value;

    let textEl = document.createElement("h3");
    let buttonEl = document.createElement("button");

    textEl.innerHTML = ctr + ' . ' + value;

    buttonEl.setAttribute("onclick", "deleteTodo(" + ctr + ")");
    buttonEl.innerHTML = "Delete";
    
    
    let El = document.createElement("div");
    El.setAttribute("class", "flex todo-" + ctr);

    El.appendChild(textEl);
    El.appendChild(buttonEl);

    let newEl = document.querySelector(".clear").appendChild(El);

    // newEl.innerHTML = '<div class="flex todo-' + ctr + '"> <h3>' + ctr + '. ' + value + '</h3><button onclick="deleteTodo(' + ctr + ')">Delete</button></div>'
}

function clearTodo() {
    const deleteElement = document.querySelector(".clear");
    deleteElement.parentNode.removeChild(deleteElement);
    ctr = 0;
}


