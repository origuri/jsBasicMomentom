const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date;
    // padStart()는 String타입만 사용 가능하므로 String으로 컨버전해준다. 
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
// 로딩이 되자마자 바로 실행되게 하기 위해 메소드 호출
getClock();
// 그 뒤로 1초마다 인터벌
setInterval(getClock, 1000);

