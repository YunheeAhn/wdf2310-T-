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
// console.log(user1.name); // error
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

// 객체의 구조분해 할당
const airbnbIcon = {
    img: 'airbnb.png',
    text: '한옥',
};

const { img, text } = airbnbIcon;

console.log(img, text); // airbnb.png 한옥

// 조건문
// if문
// if (조건) {
//     // 조건이 true일 때 실행되는 코드
// }

// if else문
// if (조건) {
//     // 조건이 true일 때 실행되는 코드
// } else {
//     // 조건이 false일 때 실행되는 코드
// }

// if else if문
// if (조건) {
//     // 조건이 true일 때 실행되는 코드
// } else if (조건) {
//     // 조건이 true일 때 실행되는 코드
// } else {
//     // 조건이 false일 때 실행되는 코드
// }

// 음수, 양수 판별 함수
// 함수 선언
function isPositive(num) {
    if (num > 0) {
        console.log(`${num}은/는 양수입니다.`);
    } else if (num < 0) {
        console.log(num + '은/는 음수입니다.');
    } else {
        console.log(num + '은/는 0입니다.');
    }
}

// 함수 실행
isPositive(1);
isPositive(-1);
isPositive(0);

// switch문
// 매개변수로 입력된 값과 일치하는 case문을 실행한다.

// switch (매개변수) {
//     case 값1:
//         // 매개변수 === 값1일 때 실행되는 코드
//         break;
//     case 값2:
//         // 매개변수 === 값2일 때 실행되는 코드
//         break;
//     default:
//     // 매개변수와 일치하는 case문이 없을 때 실행되는 코드
// }

function getPrice(item) {
    let price;
    switch (item) {
        case '패딩':
            price = '280,000';
            break;
        case '바지':
            price = '55,000';
            break;
        default:
            price = '아이템 별로 상이함';
    }
    return price;
}

console.log(getPrice('패딩')); // 280,000
console.log(getPrice('바지')); // 55,000
console.log(getPrice('모자')); // 아이템 별로 상이함

function getPrice2(item) {
    switch (item) {
        case '패딩':
            return '280,000';
        // return이란 함수를 종료하고 값을 반환하는 것이고,
        // return을 사용하면 break를 사용하지 않아도 된다.
        case '바지':
            return '55,000';
        default:
            return '아이템 별로 상이함';
    }
}

console.log(getPrice2('패딩')); // 280,000
console.log(getPrice2('바지')); // 55,000
console.log(getPrice2('모자')); // 아이템 별로 상이함

// if문으로 바꾸기
function getPrice3(item) {
    if (item === '패딩') return '280,000';
    if (item === '바지') return '55,000';
    return '아이템 별로 상이함';
}

console.log(getPrice3('패딩')); // 280,000
console.log(getPrice3('바지')); // 55,000
console.log(getPrice3('모자')); // 아이템 별로 상이함

// 반복문
// 반복문이란 특정 코드를 반복적으로 실행할 때 사용한다.

// for문
// for (초기값; 조건; 증감식) {실행될 코드}

// 1부터 10까지 출력
for (let i = 1; i <= 10; i++) {
    console.log(i); // 1 2 3 4 5 6 7 8 9 10
}

// break문 : 전체 반복문 종료

// 10부터 1까지 출력 // 10 9 8 7 6 5 4 3 2 1
for (let i = 10; i > 0; i--) {
    // 3보다 작은 수일 경우 종료하는 조건문
    if (i < 4) {
        // i가 4보다 작을 때
        break; // 전체 반복문 종료
    }
    console.log(i);
}

// continue문 : 현재 반복을 멈추고 다음 반복을 진행 (건너뛰기)
for (let i = 10; i > 0; i--) {
    if (i % 2 === 1) {
        // i가 짝수일 때
        continue; // 다음 반복으로 넘어감
    }
    console.log(i); // 10 8 6 4 2
}

// for문으로 배열 출력
const animals = ['강아지', '고양이', '물고기'];
console.log(animals); // ['강아지', '고양이', '물고기']
console.log(animals.length); // 3 (배열의 길이)
console.log(animals[0], animals[1], animals[2]); // 강아지 고양이 물고기

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]); // 강아지 고양이 물고기
}

// for of문
// for (변수 of 배열) {실행될 코드}

for (let animal of animals) {
    console.log(animal); // 강아지 고양이 물고기
}

// ex2
const users = [
    { name: '겨울', age: 2 },
    { name: '가을', age: 3 },
    { name: '여름', age: 4 },
    { name: '봄', age: 5 },
];

console.log(users); // [{…}, {…}, {…}]
console.log(users[0].name); // 겨울

// for 문
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    // 이름만 출력
    console.log(users[i].name); // 겨울 가을 여름 봄
}

for (let user of users) {
    console.log(user); // {name: "겨울", age: 2} {name: "가을", age: 3} {name: "여름", age: 4} {name: "봄", age: 5}
    console.log(user.name); // 겨울 가을 여름 봄
}

// for in문
// for (변수 in 객체) {실행될 코드}

const user = {
    name: '겨울',
    age: 2,
};

// 점 표기법
console.log(user.name, user.age); // 겨울 2
// 대괄호 표기법
console.log(user['name'], user['age']); // 겨울 2

for (let key in user) {
    console.log(key); // name age
    console.log(user[key]); // 겨울 2
}

// while문

// while (조건) {실해될 코드}

// 1부터 10까지 더하기

let i = 1; // 초기값
let sum = 0; // 합계를 저장할 변수

while (i <= 10) {
    // sum = sum + i;
    sum += i; // sum에 i를 더함
    // i = i + 1;
    // i += 1; // i에 1을 더함
    i++; // i에 1을 더함
}

console.log(sum); // 55

// do while문
// do {실행될 코드} while (조건);

// 0부터 9까지 출력
let j = 0;

do {
    console.log(j);
    j++;
} while (j < 10);
