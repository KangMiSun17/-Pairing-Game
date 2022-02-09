//변수 선언
let current = 0; //현재 뒤집은 카드
let total = 0; //다 뒤집은 카드
let time = 0; //시간
let cards = [
    { 
        img: '/IMG/10.png',
        isOpen: false
    },
    {
        img: '/IMG/10.png',
        isOpen: false
     },
     {
         img: '/IMG/J.png',
         isOpen: false
     },
    {
        img: '/IMG/J.png',
        isOpen: false
     },
     {
        img: '/IMG/Q.png',
        isOpen: false
     },
     {
         img: '/IMG/Q.png',
         isOpen: false
      },
    {
        img: '/IMG/K.png',
        isOpen: false
    },
    {
        img: '/IMG/K.png',
        isOpen: false
    },
    {
        img: '/IMG/A.png',
        isOpen: false
    },
    {
        img: '/IMG/A.png',
        isOpen: false
    }]; //카드 목록
let pair = [] //짝 카드

//카드 생성
let cardNum = new Array(cards.length);
let space = document.querySelector('.card_space');
for(let i=0; i<cardNum.length; i++){
    cardNum[i] = document.createElement('img');
    cardNum[i].id = i;
    space.appendChild(cardNum[i]);
}

//카드 확인
function FlipCard (e) {
    if(cards[e.target.id].isOpen){
        e.target.src = cards[e.target.id].img
    }else{
        e.target.src = '/IMG/뒷면.jpg'
    }
}

//카드 섞기
function shuffle () {
    cards.sort(() => Math.random() - Math.random())
}

//카드 뒤집기
space.addEventListener('click', (e) => {
    cards[e.target.id].isOpen = true;
    console.log(e.target)
    pair[current] = cards[e.target.id].img
    current++
    if(current==2){
        compare(e)
    }
    rotation(e);
    FlipCard(e);
    finish();
    console.log(pair)
})

//카드 비교
compare = (e) => {
    if(pair[0]===pair[1]){
        total += 2;
        current = 0;
        pair.length = 0;
    }else{
        current = 0;
        pair.length = 0;
    }
}

//게임 끝났는지 확인
finish = () => {
    if(total === cards.length){
        alert(`축하합니다! ${time}초 만에 클리어!`)
        reset()
    }
}

//회전 애니메이션
rotation = (e) => {
    if (e.target.style.transform == "rotateY(360deg)") {
        e.target.style.transform = "rotateY(0deg)";
    } else {
        e.target.style.transform = "rotateY(360deg)";
    }
}

//리셋

reset = () => {
    for(i=0; i<cards.length; i++){
        cardNum[i].src = '/IMG/뒷면.jpg'
    }
    total = 0;
    time = 0;
}

//타이머
let whatTime = document.querySelector('p');

function timer() {
    time = setInterval(() => {
        whatTime.innerText = `시간 : ${time}`
        time++;
    }, 1000)
}

//게임시작
function start () {
    reset()
    shuffle();
    timer()
}

start()