// 구조분해할당
// 구조분해할당은 배열이나 객체의 속성을 해체하여
// 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.

// function sum(x, y, z) {
//     console.log(x + y + z);
// }

// 배열 구조 분해
const arr = [1, 2, 3];

// const a = arr[0]; // 1
// const b = arr[1]; // 2
// const c = arr[2]; // 3

const [a, b, c] = arr;

console.log(a, b, c); // 1 2 3

// 각각의 변수가 미리 할당되어 있을 경우
let d = 0;
let e = 0;
let f = 0;

const arr2 = [1, 2, 3];
[, e, f] = arr2;

console.log(e, f); // 2 3

// 나머지 할당
const arr3 = [1, 2, 3, 4, 5];
const [g, h, ...rest] = arr3;

console.log(g, h, rest); // 1 2 [3, 4, 5]

// 객체 구조 분해
const cat = {
    name: '겨울',
    age: 2,
};

// 기본값 할당, 변수 이름 바꾸기
const { name: nick, age = 0, birth = '0101' } = cat;

console.log(name, age); // error
console.log(nick, birth); // 겨울 0101

// 선택적 체이닝
// ?.을 사용하여 객체의 속성에 접근할 때
// 해당 속성이 없는 경우 undefined를 반환한다.

const user1 = null;
console.log(user1.name); // error
console.log(user1?.name); // undefined

const userWinter = {
    name: '겨울',
    age: 2,
    address: {
        city: 'Busan',
        dong: 'Sasang',
    },
};

const userFall = {
    name: '가을',
    age: 3,
};

function printCity(user) {
    return user.address?.city || '주소가 없습니다.';
}

console.log(printCity(userWinter)); // Busan
console.log(printCity(userFall)); // 주소가 없습니다.
