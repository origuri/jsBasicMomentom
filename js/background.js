const images = ["0.jpg","1.jpg","2.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

// html파일에 해당 태그를 만들 수 있음.
// 하지만 이건 js에만 있는 거지 실제 html파일에는 존재하지 않음.
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.className = "backgroundImg";

document.body.appendChild(bgImage);

console.log(bgImage);