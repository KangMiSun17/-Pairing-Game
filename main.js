//변수 선언
let current = 0; //현재 뒤집은 카드
let total = 0; //다 뒤집은 카드
let score = 0; //점수
let cards = ['/IMG/10.png','/IMG/10.png', '/IMG/J.png', '/IMG/J.png', '/IMG/Q.png', '/IMG/Q.png', '/IMG/K.png','/IMG/K.png','/IMG/A.png','/IMG/A.png']; //카드 목록
let pair = [] //짝 카드
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

//카드 뒤집기
space.addEventListener('click', (e) => {
    rotation(e);
    let what = cards[e.target.id];
    e.target.src = what;
    pair[current] = what;
    current++;
    if(current === 2){
        compare(e);
    }else{
        
    }
    finish();
})

//카드 비교
compare = (e) => {
    if(pair[0]===pair[1]){
        total += 2;
        score += 1;
        how_score.innerHTML = `점수 : ${score}`
    }else{
        setTimeout(()=>{
            rotation(e)
            e.target.src = '/IMG/뒷면.png'}
            ,2000)
    }
    current = 0;
}

//게임 끝났는지 확인
finish = () => {
    if(total == cards.length){
        alert(`당신의 점수는 ${score}점 입니다!`);
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