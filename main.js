//변수 선언
let current = 0; //현재 뒤집은 카드
let total = 0; //다 뒤집은 카드
let time = 0; //시간
let cards = [
    { 
        img: './IMG/10.png',
        isOpen: false
    },
    {
        img: './IMG/10.png',
        isOpen: false
     },
     {
         img: './IMG/J.png',
         isOpen: false
     },
    {
        img: './IMG/J.png',
        isOpen: false
     },
     {
        img: './IMG/Q.png',
        isOpen: false
     },
     {
         img: './IMG/Q.png',
         isOpen: false
      },
    {
        img: './IMG/K.png',
        isOpen: false
    },
    {
        img: './IMG/K.png',
        isOpen: false
    },
    {
        img: './IMG/A.png',
        isOpen: false
    },
    {
        img: './IMG/A.png',
        isOpen: false
    }]; //카드 목록
let pair = [] //짝 카드
let index = [] //선택된 카드 번호

//카드 생성
let cardNum = new Array(cards.length);
let space = document.querySelector('.card_space');
for(let i=0; i<cardNum.length; i++){
    cardNum[i] = document.createElement('img');
    cardNum[i].style = "transform: rotateY(0deg)"
    cardNum[i].id = i;
    space.appendChild(cardNum[i]);
}

//카드 섞기
function shuffle () {
    cards.sort(() => Math.random() - Math.random())
    console.log(cards)
}

//카드 뒤집기
space.addEventListener('click', (e) => {
    if(cards[e.target.id].isOpen == false){
        cards[e.target.id].isOpen = true;
        rotation(e);
        e.target.src = cards[e.target.id].img
        pair[current] = cards[e.target.id].img
        index[current] = e.target.id
        console.log(index)
        current++
        if(current==2){
            compare()
        }
        finish();
    }
})

//카드 초기화
card_reset = () => {
    for(i=0;i<index.length;i++){
        cards[index[i]].isOpen = false;
        cardNum[index[i]].style.transform = "rotateY(0deg)"
        cardNum[index[i]].src = './IMG/뒷면.jpg'
    }
}

//카드 비교
compare = () => {
    if(pair[0]===pair[1]){
        total += 2;
        arr_reset();
    }else{
        setTimeout(()=>{
        card_reset();
        arr_reset();
    },800)
    }
}

//배열 비우기
arr_reset = () => {
    current = 0;
    pair.length = 0;
    index.length = 0;
}

//게임 끝났는지 확인
finish = () => {
    if(total === cards.length){
        setTimeout(()=>{
            alert(`축하합니다! ${time}초 만에 클리어!`)
            reset()}, 800)
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
        cardNum[i].src = './IMG/뒷면.jpg';
        cardNum[i].isOpen = false;
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