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

console.log("八王子市館町");

let ms=["D101","D102","D103","D201","D202","D203","D204","D205"];
for (let m of ms) {
    console.log(m);
}

let ns=["機械システム工学科","電子システム工学科","情報工学科","デザイン学科"];
for (let n of ns) {
	console.log(n);
}