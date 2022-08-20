window.onload = function () {
  var subset = document.getElementById('subset');
  subset.addEventListener('click', function(){
    const uniSet = prompt("집합을 띄어쓰기 한칸을 기준으로 입력해주세요").split(" ")
    alert(uniSet)


  })
}