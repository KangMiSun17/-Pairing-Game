//변수 선언
let current = 0; //현재 뒤집은 카드
let total = 0; //다 뒤집은 카드
let score = 0; //점수
let cards = ['/IMG/10.png','/IMG/10.png', '/IMG/J.png', '/IMG/J.png', '/IMG/Q.png', '/IMG/Q.png', '/IMG/K.png','/IMG/K.png','/IMG/A.png','/IMG/A.png']; //카드 목록
let pair = [] //짝 카드
let thisCard = []; //선택한 카드 배열
let whatCard = document.querySelectorAll('.card_space');
let how_score = document.querySelector('p');

//카드 뒷면 생성
let cardNum = new Array(cards.length);
let space = document.querySelector('.card_space');
for(let i=0; i<cardNum.length; i++){
    cardNum[i] = document.createElement('img');
    cardNum[i].src = "/IMG/뒷면.png";
    cardNum[i].id = i;
    space.appendChild(cardNum[i]);
}

//카드 섞기
cards.sort(function() {
    return Math.random() - Math.random()})
console.log(cards)

//카드 뒤집기
space.addEventListener('click', (e) => {
    let what = cards[e.target.id];
    e.target.src = what;
    current++;
    pair.push(what);
    if(current === 2){
        compare(e);
    }
})

//카드 비교
compare = (e) => {
    console.log(pair)
    if(pair[0]===pair[1]){
        total += 2;
        pair.length = 0;
        score += 1;
        how_score.innerHTML = `점수 : ${score}`
    }else{
        pair.length = 0;
        thisCard.length = 0;
    }
    current = 0;
}