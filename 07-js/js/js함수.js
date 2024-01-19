// 함수 선언하기

// 함수 선언문
// function 함수이름 () {}
function hello() {
    console.log('hello');
}

// 함수 표현식
// const 함수이름 = function () {}
const world = function () {
    console.log('world');
};

hello(); // hello
world(); // world

// return
// return이란 함수를 종료하고 값을 반환하는 것이다.

function h1() {
    return 'hello';
    // return문 이후에 작성된 코드는 실행되지 않는다.
}

function h2() {
    return;
    // return 'hello'; // 이 코드는 실행되지 않는다.
}

h1(); // hello
h2(); // undefined

// 매개변수
// 매개변수란 함수를 호출할 때 함수로 전달되는 값이다.

// function 함수이름(매개변수1, 매개변수2) {}

function sum(aa = 1, bbbb = 2) {
    return aa + bbbb;
}

console.log(sum(1, 2)); // 3
console.log(sum(7, 3)); // 10
console.log(sum(5)); // 5 + undefined = NaN(Not a Number)

// 객체의 구조 분해 할당

// 일반적
// usre 객체 : name, age, email
const users = [
    {
        name: '겨울',
        age: 2,
    },
    {
        name: '가을',
        age: 3,
    },
    {
        name: '여름',
        age: 4,
    },
    {
        name: '봄',
        age: 5,
    },
];

// 함수 선언 (email 출력 함수)
function getEmail({ name, age }) {
    // const { name, age } = a;
    return `${name}의 나이는 ${age}입니다.`;
}

// 함수 호출 (eehd@nnnnnnn.com)
console.log(getEmail(users[0])); // 겨울의 나이는 2입니다.
console.log(getEmail(users[1])); // 가을의 나이는 3입니다.
console.log(getEmail(users[2])); // 여름의 나이는 4입니다.
console.log(getEmail(users[3])); // 봄의 나이는 5입니다.

// 배열의 구조 분해 할당

const animals = ['강아지', '고양이', '물고기'];

// 함수 선언 (배열의 두번째 값 출력 함수)
function getSecond([, b]) {
    // const [a, b, c] = array;
    return `난 ${b}를 키우고 있어`;
}

// 함수 호출
console.log(getSecond(animals)); // 고양이
