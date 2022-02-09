// console.log 文
console.log("Hello world");

// 変数
let name = "佐藤　秀虎";
console.log(name);
console.log(name + "です");

// 変数の更新
let favorite_sport_name = "バスケットボール";
console.log(favorite_sport_name);
favorite_sport_name = "アメリカンフットボール";
console.log(favorite_sport_name);

// 変数の値の更新
let number = 9;
console.log(number);
number += 10; // numberに10足した値に更新される number = number + 10; と同じ
console.log(number);

// 定数
const my_nation = "日本"; // 定数は更新不可能
console.log(my_nation + "出身です");
// my_nation = "アメリカ" だとエラーが出る

// テンプレートリテラル
const my_name = "佐藤　秀虎";
const my_age = 23;
console.log(`私の名前は${my_name}です。${my_age}歳です`);

// if文
const level = 10
if (level > 5) {
    console.log(`${level}レベルなんですね！スゴい`);
}

// 真偽値と比較演算子(1)
const english_score = 50
console.log(english_score > 80); // falseが返ってくる
console.log(english_score < 80); // trueが返ってくる

if (english_score >= 80) {
    console.log("Good job");
} else {
    console.log("So so");
}

// 真偽値と比較演算子(2) ==, !=, ===, !==
const birthday = 19980918;
console.log(birthday === "19980918"); // ==だと文字列と数値でも同じならtrueが返される。 ==と!=は曖昧で、===と!==は厳格

// else
const age = 12

if (age >= 20) {
    console.log("成人です");
} else {
    console.log("未成年です");
}

// else if

if (age >= 30) {
    console.log("３０歳より年下です");
} else if (age >= 20) {
    console.log("20歳よりは年上です");
} else {
    console.log("20歳以下ですね");
}

// 複数の条件式
if (age >= 20 && age < 30) {
    console.log("20代ですね");
}

// switch文(1)
const signal = "green";

switch (signal) {
    case "red":
        console.log("Stop!!");
        break
    case "yellow":
        console.log("Caution!!");
        break
    case "green":
        console.log("Go!!");
        break
    default: // 上記のcaseに合致しない場合に実行される
        console.log("Wrong signal");
        break;
}