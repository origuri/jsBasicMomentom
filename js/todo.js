const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// 로컬 스토리지의 키를 2번 이상 사용하고 있으므로 변수 선언해서 사용
const TODOLISTS_KEY = 'toDoLists';
 
// 할일 리스트를 배열로 저장.
let toDoLists = [];



// 할일 리스트를 로컬스토리지에 저장하는 메소드 
// 배열 형태를 그대로 String 형태로 저장하기 위해 JSON.stringify를 사용함.
function saveToDoLists(){
    localStorage.setItem(TODOLISTS_KEY, JSON.stringify(toDoLists));
}


// 버튼을 누르면 리스트가 삭제되게 하는 메소드
function deleteToDo(event){
    const li = event.target.parentElement;
    // todo.id : nummer 타입 , li.id : String 타입이므로 parseInt로 같게 만들어줘야 함. 
    toDoLists = toDoLists.filter((toDoLists) => toDoLists.id !== parseInt(li.id));
    // 그리고 새로운 array을 다시 localstorage에 저장시킴.
    saveToDoLists();
    li.remove();
}

// 태그를 생성해서 할일 리스트를 만드는 메소드
function paintToDo(newToDo){
    // 태그 생성
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    // 버튼에 이벤트 리스너 구현
    button.addEventListener("click", deleteToDo);
    // li의 안에 span 태그와 button 태그를 넣는다. 
    li.appendChild(span);
    li.appendChild(button);
    // ul 태그 안에 li 태그를 넣는다. 
    toDoList.appendChild(li);
}

 
// 할일 리스트를 입력할 때 submit이 안되게 하는 메소드
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj = {
        text:newToDo,
        id:Date.now()
    }
    toDoLists.push(newToDoObj);
    paintToDo(newToDoObj);
    // 배열을 localStorage에 저장하는 메소드
    saveToDoLists();
}

// 이벤트 리스너
toDoForm.addEventListener("submit", handleToDoSubmit);

// 로컬 스토리지에 저장되어 있는 todoLists를 가져오기

const savedToDoLists = localStorage.getItem(TODOLISTS_KEY);

// 이미 로컬스토리지에 저장이 되어있는 할일 리스트가 있다면 반복해서 보여줌
if(savedToDoLists !== null){
    const parsedToDoLists = JSON.parse(savedToDoLists);
    toDoLists = parsedToDoLists;
    parsedToDoLists.forEach(paintToDo);
}