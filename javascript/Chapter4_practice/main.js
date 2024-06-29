let computerNum = 0;

// HTML 요소들을 가져옴
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
// let resetButton = document.getElementById("reset-button");

// 버튼 클릭 이벤트 설정
playButton.addEventListener("click", play);
// resetButton.addEventListener("click",reset);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = parseInt(userInput.value);
  if (userValue < computerNum) {
    resultArea.textContent = "UP";
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN";
  } else {
    resultArea.textContent = "SAME";
  }
}
// function reset(){
//    //user 인풋창 깨끗하게 정리되고 새로운 번호가 생성
//    userInput.value ="";
//    //새로운 번호가 생성
//    pickRandomNum();
// }

// 게임을 시작할 때 랜덤 숫자를 선택함
window.onload = pickRandomNum;