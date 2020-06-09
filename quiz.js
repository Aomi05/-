var quiz = [
  ["麻雀はどこの国が発祥か","中国","韓国","日本","台湾",1],
  ["麻雀牌として正しく無いものはどれか","筒子","索子","槓子","萬子",3],
  ["聴牌を宣言することをなんというか","立直","自摸","振聴","副露",1],
  ["点数が一番高く、非常に難易度が高い役のことをなんというか","天満","役満","跳満","倍満",2],
  ["捨牌を使って同じ牌を3つ揃えることをなんというか","ロン","チー","カン","ポン",4]
];

var counter = 0;

function set(){
  var order = document.getElementById("order");
  var question = document.getElementById("question");
  order.innerHTML = "【第" + (counter + 1) + "問】";
  question.innerHTML = quiz[counter][0];
  
  for(var i = 1;i < 5;i ++){
   var answer = document.getElementById("answer" + i);
   answer.innerHTML = quiz[counter][i];
  }
}

var score = 0;

function judge(num){
 var result = document.getElementById("result");
 var answer = quiz[counter][5];
 if(answer == num){
  result.innerHTML = "正解！";
  score += 1;
 }
 else{
  result.innerHTML = "不正解…";
 }
 if(counter == quiz.length - 1){
  result.innerHTML += quiz.length + "問中"　+ score + "問正解！";
 }
 else{
  counter += 1;
  set();
 }
}