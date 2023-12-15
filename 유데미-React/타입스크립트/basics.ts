let age: number;

age = 24;

let userName: string;

userName = "yoon";

let Instuctor: boolean;

Instuctor = true;

// arr object

let hobbies: string[]; // 문자열 배열 -> 타입[]

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "yoobn",
  age: 24,
};

let people: {
  name: "yoobn";
  age: 24;
}[];

// 유형 추론
let text1: string | number = "test1"; // 이렇게 작성하면 text1은 string 타입을 가지고 있으니 text1을 사용할시에 임의적으로 유형 추론이 가능해진다
// 타입스크립트에서 권장하는 방식

text1 = 123; // | 사용하므로 유니온 타입으로 사용가능

// 함수, 타입

function add(a: number, b: number) {
  return a + b;
}

// 반환할 값이 없을때 void
function print(value: any) {
  console.log(value);
}

// 제네릭
function logText<T>(text: T): T {
  return text;
}
const text = logText("Hello Generic");
