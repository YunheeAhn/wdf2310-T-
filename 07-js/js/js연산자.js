// 연산자
// 1. 산술 연산자
// +, -, *, /, %(나머지 연산자)

// 덧셈 연산자
console.log(1 + 2); // 3
console.log('가을 ' + '겨울'); // 가을 겨울

// 뺄셈 연산자
console.log(5 - 3); // 2

// 곱셈 연산자
console.log(2 * 3); // 6

// 나눗셈 연산자
console.log(6 / 3); // 2(몫)

// 나머지 연산자
console.log(7 % 3); // 1(나머지)
// 나머지가 0이면 짝수, 1이면 홀수
// (now % 슬라이드의 갯수) 나머지가 0일 경우 마지막 슬라이드이다.

// 짝수, 홀수 판별 함수
// 함수 선언
function isEven(num) {
    return num % 2 === 0;
    // num을 2로 나눈 나머지가 0이면 true, 아니면 false
}

// 함수 호출
console.log(isEven(2));

// 할당 연산자

let now = 1;
console.log(now); // 1

now = now + 1; // now에 1을 더한 값을 now에 할당
now += 1; // 축약형
console.log(now); // 3

let c = 2;

c = c * 2; // c에 2를 곱한 값을 c에 할당
c *= 2; // 축약형
console.log(c); // 8

// 부정 연산자
// !를 사용하여 true를 false로, false를 true로 바꿀 수 있다.

console.log(!true); // false
console.log(!false); // true
console.log(!!0); // false

// 비교 연산자
// ===, !==, <, >, <=, >=
// ==, !=는 사용하지 않는 것이 좋다.

// 일치 연산자 (형변환 X)
console.log(1 === 1); // true
console.log(1 === '1'); // false

// 불일치 연산자 (형변환 X)
console.log(1 !== 1); // false
console.log(1 !== '1'); // true

// 대소 비교 연산자 (형변환 O)
console.log(1 < 2); // true
console.log(1 <= 2); // true
console.log(1 > 2); // false
console.log(1 >= 2); // false

// 논리 연산자
// &&(and) 연산자
// 둘 다 true일 경우 true
console.log(true && true); // true
console.log(true && false); // false
console.log(1 < 2 && 2 < 3); // true

console.log(true && false); // false
console.log(1 && 0); // 0
console.log(1 && 2 && 0); // 0
console.log(1 && 0 && false); // 0
console.log('a' && 'b' && ''); // ''
console.log('a' && 'b' && 'c'); // 'c'

// ||(or) 연산자
// 둘 중 하나만 true일 경우 true
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

// 연산자를 기준으로 가장 먼저 만나는 true 값을 반환한다.
console.log(false || true); // true
console.log(1 || 0); // 1
console.log(false || 0 || {}); // {}
console.log('' || 0 || NaN); // NaN
// 모두가 false일 경우 마지막 값을 반환한다.

// 병합 연산자
// || 연산자와 비슷하다.
// null 또는 undefined는 제외하고 반환한다.

console.log(0 || 5); // 5
console.log(0 ?? 5); // 0
console.log(null ?? undefined); // undefined

// 삼항 연산자
// 조건 ? 참일 때 반환 : 거짓일 때 반환

console.log(1 < 2 ? '참' : '거짓'); // 참
console.log(1 > 2 ? '참' : '거짓'); // 거짓

// ex
function isCat(name) {
    return (
        // 조건 ? 참 : 거짓
        name === '고양이' ? '고양이' : '고양이 아님'
    );
}

console.log(isCat('고양이')); // 고양이
console.log(isCat('개')); // 고양이 아님

// 전개 연산자
// ...을 사용하여 배열이나 객체를 펼칠 수 있다.

// 배열의 전개
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

console.log(num1.concat(num2)); // [1, 2, 3, 4, 5, 6]
console.log([...num1, ...num2]); // [1, 2, 3, 4, 5, 6]

// 객체의 전개
const dog = {
    name: '멍멍이',
    phone: '010-0000-0000',
};

const dogInfo = {
    ...dog,
    age: 2,
};

console.log(dogInfo); // {name: "멍멍이", phone: "010-0000-0000", age: 2}

// 함수의 전개
// ...을 사용하여 파라미터(인수)를 전개할 수 있다.

// sum 함수 선언
function sum(a, b, c) {
    console.log(a + b + c);
}
// sum 함수 호출
sum(5, 6, 7); // 18

// 배열을 파라미터(인수)로 전달하려면?
const num3 = [5, 6, 7];
const num4 = [8, 9, 10];

sum(num3[0], num3[1], num3[2]); // 18
sum(num4[0], num4[1], num4[2]); // 27

// 전개 연산자를 사용해 인수를 전달
sum(...num3); // 18
sum(...num4); // 27
