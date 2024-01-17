// js기본

// String(문자)
console.log('Hello World');

const a = '겨울';
console.log(a);

console.log(`안녕!! ${a}`);
// 리터럴 방식
// 백틱을 이용하면 문자열 안에 변수를 넣을 수 있다.

// Number(숫자)

// 따옴표를 붙이지 않으면 숫자로 인식한다.
console.log(123); // 123
console.log(1 + 2); // 3
console.log('1' + 2); // 12
console.log('1' + '2'); // 12

const b = -123;
const c = 1.23;

console.log(b + 100, c * 2); // -123 1.23

// 숫자로 변환

const d = 0.1;
const e = 0.2;

console.log(typeof (d + e).toFixed(1)); // string
console.log(Number((d + e).toFixed(1))); // 0.3

// Boolean(참 / 거짓)

const f = true;
const g = false;

if (g) {
    console.log('참입니다.');
}

// null, undefined
// null : 값이 없다.
// undefined : 값이 할당되지 않았다.

let age = null; // 값이 없다.
console.log(age); // null

age = 20;
console.log(age); // 20

let height; // undefined
console.log(height); // undefined

height = 180;
console.log(height); // 180

// Array(배열)
// 여러개의 값을 순차적으로 나열한 자료형
// [값, 값, 값]

const animals = ['강아지', '고양이', '토끼'];

console.log(animals); // ['강아지', '고양이', '토끼']
console.log(animals[0]); // 강아지
console.log(animals[2]); // 토끼
console.log(animals.length); // 3
// 배열의 마지막 요소를 가져온다.
console.log(animals[animals.length - 1]); // 토끼

// Object(객체)
// 여러개의 값을 {key : value} 형태로 저장한 자료형
// {이름 : 값, 이름 : 값}

const user = {
    name: '가을',
    age: 2,
};

console.log(user); // {name: "가을", age: 2}
// 가을이의 나이는 2살입니다.
console.log(`${user.name}이의 나이는 ${user.age}살입니다.`);
console.log(user.name + '이의 나이는 ' + user.age + '살입니다.');

// 점 표기법
console.log(user.name, user.age); // 가을 2

// 대괄호 표기법
console.log(user['name'], user['age']); // 가을 2

//ex
const userA = {
    name: '미애',
    age: 30,
};

const userB = {
    name: '가을',
    age: 2,
    parent: userA,
};

console.log(userB); // {name: "가을", age: 2, parent: {…}}
console.log(userB.parent.name); // 미애
console.log(userB['parent']['name']); // 미애

// 배열에 객체 넣기
const users = [userA, userB];
console.log(users); // [{…}, {…}]
console.log(users[0]); // {name: "미애", age: 30}
console.log(users[0].name); // 미애

// function(함수)
// 특정 코드를 하나의 명령으로 실행할 수 있게 해주는 자료형
// function 함수이름(매개변수) {코드}

function printHello() {
    console.log('안녕하세요');
}

printHello(); // 안녕하세요

function getNumber() {
    return 123;
}

console.log(getNumber, typeof getNumber); // [Function: getNumber] function
console.log(getNumber(), typeof getNumber()); // 123

// Type Conversions(형 변환)

const h = 1; // number
const i = '1'; // string

// 동등 연산자 : 값만 비교
console.log(h == i); // true
// 일치 연산자 : 값과 타입을 비교
console.log(h === i); // false

// truthy(참 같은 값) & falsy(거짓 같은 값)
// false, 0, '', null, undefined, NaN

const j = NaN;

if (j) {
    console.log('참입니다.');
} else {
    console.log('거짓입니다.');
}
