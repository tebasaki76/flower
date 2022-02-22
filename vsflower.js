'use strict';

function load_effect() {
  var element = document.getElementsByClassName('load-fade');
  if(!element) return; // 呼び出し元へ処理を戻す
  
  for(var i = 0; i < element.length; i++) { 　//DOM操作？
    element[i].classList.add('is-show');
  }　//新規作成した変数iを数値０で初期化し、継続条件「変数iが変数elementの配列？より小さい」が真を間以下を繰り返せ
  //{is-showを加えろ}変数iを１増やす
}
setTimeout(load_effect, 600); // 600ミリ秒経過後に実行
