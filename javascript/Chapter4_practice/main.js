let computerNum = 0;

// HTML 요소들을 가져옴
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5
let gameOver  = false;
let chanceArea = document.getElementById("chance-area")

let history= []

// 버튼 클릭 이벤트 설정
//paly는 함수 -> 이런걸 콜백함수라고 함
playButton.addEventListener("click", play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function(){userInput.value=""})

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = parseInt(userInput.value);
  // 유효성 검사
  if(isNaN(userValue) || userValue <1 || userValue > 100){
    resultArea.textContent ="1과 100 사이 숫자를 입력해 주세요"
    return;
  }
  // 히스토리 검사


  if(history.includes(userValue)){
    resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요"
    return;
  }
  history.push(userValue)
  console.log("history",history)

  chances -- ;
  chanceArea.textContent= `남은 기회 : ${chances}번`
  console.log("chances",chances)

  if (userValue < computerNum) {
    resultArea.textContent = "UP!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN!";
  } else {
    resultArea.textContent = "SAME!";
  }

  if(chances == 0){
    gameOver = true
  }

  if(gameOver == true){
    playButton.disabled = true
  }
}

function reset(){
   //user 인풋창 깨끗하게 정리되고 새로운 번호가 생성 
   userInput.value ="";
   //새로운 번호가 생성
   pickRandomNum();
   resultArea.textContent ="결과값이 여기 나옵니다!"
   chances= 5
   history =[]
}

// 게임을 시작할 때 랜덤 숫자를 선택함
window.onload = pickRandomNum;