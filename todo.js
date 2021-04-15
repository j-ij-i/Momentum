const toDoform = document.querySelector(".js-toDoForm"),
toDoInput = toDoform.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let liidNum = 1;
let toDos = [];

function deleteToDo(event){
    console.dir(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        console.log(toDo.id,li.id);
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos))
}

function paintToDo(text){
    toDoInput.value="";
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = liidNum++;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,    
        id:newId
    }
    toDos.push(toDoObj);
    console.log(toDos);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    if(currentValue.length>0){
        console.log(currentValue);
        paintToDo(currentValue);
    }
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS); 
    if(loadedToDos !== null){ //     if(toDos !== null) 면 왜 새로고침 할때마다 데이터가 저장이 안될까
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
            console.log(toDo.text);
        })
    }
}

function init(){
    console.log(toDos);
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit);
}

init();