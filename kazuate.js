let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;
let finished = 0;

document.querySelector("#submit").addEventListener("click", hantei);

function hantei() {
  // 入力値の取得と整数変換
  const input = document.querySelector("#guess").value;
  const yoso = parseInt(input);

  // 回数カウントと表示
  kaisu++;
  document.querySelector("#kaisu").textContent = kaisu;
  document.querySelector("#answer").textContent = yoso;

  const result = document.querySelector("#result");

  if (finished === 1) {
    result.textContent = "すでにゲームは終わっています。";
    return;
  }

  if (yoso === kotae) {
    result.textContent = "正解です．おめでとう!";
    finished = 1;
  } else if (kaisu === 3) {
    result.textContent = "まちがい．残念でした答えは " + kotae + " です．";
    finished = 1;
  } else if (kaisu > 3) {
    result.textContent = "答えは " + kotae + " でした．すでにゲームは終わっています";
  } else if (yoso < kotae) {
    result.textContent = "まちがい．答えはもっと大きいですよ";
  } else {
    result.textContent = "まちがい．答えはもっと小さいですよ";
  }
}
