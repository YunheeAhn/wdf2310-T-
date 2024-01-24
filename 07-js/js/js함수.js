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
function getSecond([, b = '두번째 요소가 없습니다.']) {
    // const [a, b, c] = array;
    return `난 ${b}를 키우고 있어`;
}

// 함수 호출
console.log(getSecond(animals)); // 고양이

// 나머지 매개변수 (...rest)
// 매개변수를 배열로 전달받는다.
// function 함수이름(...매개변수) {}

function sum(a, b, ...rest) {
    console.log(a, b, rest);
}

sum(1, 2); // 1 2 []
sum(1, 2, 3, 4, 6, 8); // 1 2 [3, 4, 6, 8]

// 배열의 숫자를 더하는 로직 함수
function sumAll(...rest) {
    console.log(rest);

    // return rest.reduce(fn, 초기값);
    return rest.reduce(function (account, current) {
        return account + current;
    }, 0);
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
console.log(sumAll(1, 2, 3, 4, 5)); // 15

// 화살표 함수
// const 함수이름 = function () {}; 함수의 표현식

// () => {}; // 매개변수가 없을 경우
// x => {}; // 매개변수가 하나일 경우 소괄호 생략 가능
// (x, y) => {}; // 매개변수가 두개 이상일 경우 소괄호로 감싸준다.

const hello1 = (name) => {
    console.log(`나는 ${name}입니다.`);
};

hello1('김코딩'); // 나는 김코딩입니다.

const sum2 = (a, b) => a + b;

console.log(sum2(1, 2)); // 3

// 화살표 함수의 다양한 예시
// 1. 매개변수가 없는 경우
const a = () => {};

// 2. 매개변수가 하나인 경우 (괄호 생략 가능)
// const b = x => {};

// 3. 매개변수가 여러 개인 경우 (괄호 생략 불가)
const c = (x, y) => {};

// 4. 함수의 리턴이 있는 경우
// return 으로 시작하는 경우 중괄호, return 생략 가능
const d = (x, y) => x + y;

// 5. return 으로 시작하지 않는 경우 중괄호 생략 불가
const e = (x, y) => {
    console.log(x);
    return y;
};

// 6. 객체를 반환하는 경우 객체를 소괄호로 감싸준다.
const f = () => ({ a: 1 });

// 7. 배열을 반환하는 경우
const g = () => [1, 2];
