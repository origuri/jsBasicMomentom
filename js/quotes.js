const quotes =[
    {
        quoto: "노력은 배신하지 않는다.",
        author: "마야 앤젤루 (Maya Angelou)"
    },
    {
        quoto: "어제가 없다면 오늘은 아무런 의미가 없다.",
        author: "알버트 아인슈타인 (Albert Einstein)"
    },
    {
        quoto: "성공은 최후의 실패를 이기는 능력이다." ,
        author: "월트 디즈니 (Walt Disney)"
    },
    {
        quoto: "인생은 용기 있는 모험이거나 아무 것도 아니다.",
        author: "헬렌 켈러 (Helen Keller)"
    },
    {
        quoto: "가장 훌륭한 방법 중 하나는 다른 사람들에게 가르쳐 주는 것이다.",
        author: "아인슈타인 (Albert Einstein)"
    },
    {
        quoto: "성공의 비밀은 자신이 원하는 것을 가지기 위해 행동하는 것이다." ,
        author: "피터 드러커 (Peter Drucker)"
    },
    {
        quoto: "내가 보이는 것을 모두 잊어버려라. 그리고 나는 가능한 것을 보자.",
        author: "톰 크루즈 (Tom Cruise)"
    },
    {
        quoto:"열정은 어떤 장애물이든 돌파할 수 있는 유일한 힘이다.",
        author: "월트 디즈니 (Walt Disney)"
    },
    {
        quoto: "인생은 10%는 어떤 일이 일어나는 것이고, 90%는 그것에 대한 태도이다.",
        author: "찰스 R. 스윈들 (Charles R. Swindoll)"
    },
    {
        quoto: "성공은 당신이 할 수 있는 최선의 일을 하고 있는지 아닌지에 달려있다.",
        author: "존 F. 케네디 (John F. Kennedy)"
    },

]

const quoto = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuoto = quotes[Math.floor(Math.random()*quotes.length)];

quoto.innerText = todaysQuoto.quoto;
author.innerText = todaysQuoto.author;

