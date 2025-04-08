const inputEle = document.getElementById("todoInput");
const addBtn = document.getElementById("addButton");
const todoList = document.getElementById("todoList");
const doneList = document.getElementById("doneList");
const clearBtn = document.getElementById("clearButton");


let interTodo = JSON.parse(localStorage.getItem("interTodo")) || [];
let interDone = JSON.parse(localStorage.getItem("interDone")) || [];


document.addEventListener("keydown", e => {
    if (e.key ==="Enter") {
        adding();
    }
})

addBtn.addEventListener("click",() => {
    adding();
    focusing();
})

function adding() {
    if (inputEle.value !==""){
        interTodo.push(inputEle.value);
        inputEle.value = "";
        showEle();
    }else{
        alert("Please enter a valid task to add!!!!!!!! 😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️")
        focusing();
    }
}

function focusing() {
    inputEle.focus();
}

function showEle(){
    todoList.innerHTML = "";
    doneList.innerHTML = "";

    interTodo.forEach( (e) => {
        let li = document.createElement("li");
        li.textContent = e;
        li.className = "todoele";
        todoList.appendChild(li);
    })

    interDone.forEach((e) => {
        let li = document.createElement("li");
        li.textContent = e;
        li.className = "todoele";
        doneList.appendChild(li);
    })
    storeIt();
}

todoList.addEventListener("click", e =>{
    if (e.target.classList.contains("todoele")){
        let index = interTodo.indexOf(e.target.textContent);
        if (index > -1) {
            interTodo.splice(index,1);
            interDone.push(e.target.textContent);
            showEle();
        }
    }
})
doneList.addEventListener("click", e => {
    if (e.target.classList.contains("todoele")){
        let index = interDone.indexOf(e.target.textContent);
        if (index > -1) {
            interDone.splice(index,1);
            showEle();
        }
    }
})

clearBtn.addEventListener("click",() => {
    interTodo = [];
    interDone = [];
    showEle();
})

function storeIt(){
    localStorage.setItem("interTodo",JSON.stringify(interTodo));
    localStorage.setItem("interDone",JSON.stringify(interDone));
}

showEle();
focusing();