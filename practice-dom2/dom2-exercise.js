//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

function show(){
let l = document.querySelector("h2#addr");
let p = document.createElement("p");
p.textContent = campus.address;
l.insertAdjacentElement("afterend", p);

let d = document.querySelector("h2#dept");
let u = document.createElement("ul");

for (let department of gakka) {
	let li = document.createElement("li");
	li.textContent = department.name;
	u.appendChild(li);
}

d.insertAdjacentElement("afterend", u);
}

let btn = document.querySelector("button#show");
btn.addEventListener("click", show);