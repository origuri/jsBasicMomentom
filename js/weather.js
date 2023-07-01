const API_KEY="105468b580fcef4edec3227c744d9bdb";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(Response => Response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

}
function onGeoError(){
    alert("위치와 날씨를 불러올 수 없습니다. 잠시 후에 다시 이용해 주세요")
}

// 아규먼트로 두 개 필요한데 첫번째는 성공했을 때의 function, 두번째는 실패했을 때의 function
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);