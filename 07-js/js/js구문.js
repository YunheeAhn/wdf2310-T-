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
