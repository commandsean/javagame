window.onload = function () {
  var subset = document.getElementById('subset');
  subset.addEventListener('click', function(){
    const result = [[]]
    var uniSet = []
    uniSet.push(prompt("집합을 띄어쓰기 한칸을 기준으로 입력해주세요").split(" "))
    for (let i = 0; i < uniSet.length + 1; i++){
      for (let j = 0; j < result.length; j++){
        result.push(uniSet[j])
        
      }
    }
    
    alert(result)
    


  })
}