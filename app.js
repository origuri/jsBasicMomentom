const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector("h1");

// 두개 이상 같은 String을 사용하게 된다면 const로 선언해서 사용
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY  = "username";

// 맨 처음입장 한사람을 위한 메소드
function handlerLoginSubmit(event){
    // html태그의 기본 동작을 막아줌.
    event.preventDefault();
    const username = loginInput.value;
    // classList=> class의 이름을 추가해 줌
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

loginForm.addEventListener("submit", handlerLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

// 백틱을 사용하면 ${}로 동적으로 사용 가능
function paintGreetings(username){
    greeting.innerText = `${username}님 안녕하세요!`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 재방문을 위한 메소드
// localStorage에 저장된 이름이 없다면 form태그의 hidden을 없앰
// 여기서 로그인을 하게되면 function에서 다시 class이름 hidden을 추가해줌. 
// 또한 h1태그에 있던 hidden을 제거 함으로 써 찬규님 안녕하세요 가 나오게 됨. 
if(savedUsername ===  null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handlerLoginSubmit);
} else{
    // 스토리지에 저장되어 있는 savedusername을 사용한다. 
    paintGreetings(savedUsername);
}