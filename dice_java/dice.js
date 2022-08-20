window.onload = function () {
  var dice_button = document.getElementById('dice_button');
  dice_button.addEventListener('click', function(){
    const random_dice = Math.floor(Math.random() * 6 )+1;
    const number = Number(prompt("1~6 사이의 숫자를 입력해주세요"))

    if (number > 6) {
      alert("1~6 사이의 숫자를 입력해주세요")

    }else{
      if (number === random_dice){
        alert("맞췄습니다! 내 숫자: " + number + " 주사위 : " + random_dice)
      }else{
        alert("틀렸습니다! 내 숫자: " + number + " 주사위 : " + random_dice)
      }
    }

  })
}