
// 課題3-2 のプログラムはこの関数の中に記述すること
let data = {
  kekka: "1件目の検索結果",
  name: "バグダッドカフェ Bagdadcafe/モータウン MOTOWN",
  genre: { name: "居酒屋" },
  address: "東京都八王子市明神町４-6-12 ホテル・ザ・ビー八王子（旧八王子プラザホテル）2F",
  open: "月～日、祝日、祝前日: 17:00～21:00 （料理L.O. 20:00 ドリンクL.O. 20:00）",
  access: "京王八王子駅を背にし右手に見えるローソンの隣のビル、ホテルザ・ビーの2階です。",
  station_name: "京王八王子",
  budget: { name: "3001～4000円" },
  catch: "【サプライズ演出有】 結婚パーティー受付中",
  kekka2: "2件目の検索結果",
  name2: "隠れ家バル Funny&Bouquet",
  genre2: { name2: "居酒屋" },
  address2: "東京都八王子市東町12-14",
  open2: "月～日、祝日、祝前日: 17:00～翌5:00 （料理L.O. 翌3:00 ドリンクL.O. 翌4:00）",
  access2: "JR八王子駅北口徒歩1分/京王八王子駅徒歩3分",
  station_name2: "八王子",
  budget2: { name2: "2001～3000円" },
  catch2: "2.5時間飲み放題付2000円~ 【★少人数様ソファー★】"
};
function print(data) {
  console.log(data.kekka);
  console.log("名前:"+ data.name);
  console.log("ジャンル:"+ data.genre.name);
  console.log("住所:"+ data.address);
  console.log("営業時間:"+ data.open);
  console.log("アクセス:"+ data.access);
  console.log("最寄駅:"+ data.station_name);
  console.log("予算:"+ data.budget.name);
  console.log("キャッチコピー:"+ data.catch);

  console.log(data.kekka2);
  console.log("名前:"+ data.name2);
  console.log("ジャンル:"+ data.genre2.name2);
  console.log("住所:"+ data.address2);
  console.log("営業時間:"+ data.open2);
  console.log("アクセス:"+ data.access2);
  console.log("最寄駅:"+ data.station_name2);
  console.log("予算:"+ data.budget2.name2);
  console.log("キャッチコピー:"+ data.catch2);
}

function greeting() {
  let keyword = document.querySelector('#search');
  console.log("検索キー:", keyword);
}
b = document.querySelector('button#print');
b.addEventListener('click', greeting);

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
d = document.createElement("div");
d.id = "result";
let p = document.createElement("p");
p.textContent = "";
  p.textContent += "1件目の検索結果" + data.kekka;
  p.textContent += "名前: " + data.name;
  p.textContent += "ジャンル: " + data.genre.name;
  p.textContent += "住所: " + data.address;
  p.textContent += "営業時間: " + data.open;
  p.textContent += "アクセス: " + data.access;
  p.textContent += "最寄駅: " + data.station_name;
  p.textContent += "予算: " + data.budget.name;
  p.textContent += "キャッチコピー: " + data.catch;

  p.textContent += "2件目の検索結果" + data.kekka2;
  p.textContent += "名前: " + data.name2;
  p.textContent += "ジャンル: " + data.genre2.name2;
  p.textContent += "住所: " + data.address2;
  p.textContent += "営業時間: " + data.open2;
  p.textContent += "アクセス: " + data.access2;
  p.textContent += "最寄駅: " + data.station_name2;
  p.textContent += "予算: " + data.budget2.name2;
  p.textContent += "キャッチコピー: " + data.catch2;
    d.appendChild(p);
  document.getElementById("result").appendChild(d);
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
b = document.querySelector("button#print");
b.addEventListener('click',sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let r = document.querySelector('h2');
  let remove = document.querySelector('#result');
  if(remove){
    if(r !== null){
      r.remove();
    }
    remove.remove();
  }
  let u = document.querySelector("button#print");
  let t = document.createElement('div');
  t.id='result';
  u.insertAdjacentElement('afterend',t);
	// URL を設定
  let x = document.querySelector('input[name="kensaku"]');
  x=x.value;
	let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+x+'.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
// サーバから送られてきたデータを出力
	let data = resp.data;
  let e = 0;

  for(let n of data.results.shop){
    e=e+1;
    u = document.createElement('ul');//ul要素作成

l = document.createElement('li');
let st = document.createElement('strong');
st.textContent = e+'件目の検索結果';
l.appendChild(st);
u.appendChild(l);
u.insertAdjacentElement('beforeend', l);

l = document.createElement('li');
l.textContent = '名前: '+n.name;
u.insertAdjacentElement('beforeend', l);     

l = document.createElement('li');
l.textContent = 'ジャンル: '+n.genre.name;
u.insertAdjacentElement('beforeend', l);     

l = document.createElement('li');
l.textContent = '住所: '+n.address;
u.insertAdjacentElement('beforeend', l);

l = document.createElement('li');
l.textContent = '営業時間: '+n.open;
u.insertAdjacentElement('beforeend', l);

l = document.createElement('li');
l.textContent = 'アクセス: '+n.access;
u.insertAdjacentElement('beforeend', l);

l = document.createElement('li');
l.textContent = '最寄り駅: '+n.station_name;
u.insertAdjacentElement('beforeend', l);

l = document.createElement('li');
l.textContent = '予算: '+n.budget.name;
u.insertAdjacentElement('beforeend', l);

l = document.createElement('li');
l.textContent = 'キャッチコピー: '+n.catch;
u.insertAdjacentElement('beforeend', l);

p = document.querySelector('div#result');     // p#primary 要素の
p.insertAdjacentElement('beforeend', u);      // 直後に ul要素を追加

if(n.sub_genre){
  l = document.createElement('li');
l.textContent = 'サブジャンル'+n.sub_genre.name;
u.insertAdjacentElement('beforeend', l);
}

  }
  p = document.createElement('h2');
  u = document.querySelector("button#print");
  p.textContent = '検索結果が'+e+'件あります。';
  u.insertAdjacentElement('afterend',p);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}