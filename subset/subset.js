window.onload = function () {
  var subset = document.getElementById('subset');
  subset.addEventListener('click', function(){
    const result = [[]]
    const uniset_come = prompt("집합을 띄어쓰기 한칸을 기준으로 입력해주세요")
    const front_result = [ "[]" ]
    const uniSet = uniset_come.split(" ")
    for (const i of uniSet){
      for (const j in result){ 
        result.push(result[j] + [i] + ", ")
        front_result.push("[" + result[j] + [i] + "]") 
      }
    }
    alert(front_result)
    alert("부분집합의 개수: " + result.length)
  })
}