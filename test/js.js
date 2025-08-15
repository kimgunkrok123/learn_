//주석 사용법

// ;은 안써도 되지만 사용추천

//자료형

int1 = 1 // 정수
int2 = 100 // 큰수
int3 = 1.1 // 소수

// ""나 ''나 `` 를 사용하여 문자를 감싸야 문자열으로 인식함
strB = "Big" // 큰따움표와 작은 따움표는 차이없음
strS = 'Small'
strW = `What? ${int1}` // 변수에 편함
strI = `What? ${30+10-10/5*100}` // 표현식도 쓸수있음

str1 = "가가가" // 한글도됨
str2 = "123" // 숫자도됨
str3 = "string" // 영어도됨

// 참은 true 거짓은 false 
Tbool = true //참
Fbool = false //거짓

What = "1"
Inte = 1
Ints = 2

gh = What == Inte
ga = Ints>Inte // true
gb = Ints<Inte // false

// 변수

// 키워드 변수명 = 내용 이렇게 사용

i1 = 1 ; // 이렇게 쓰면 위험함

//  2가지 키워드가 있음
//  let과 const임
let i3 = 3 ; // let
// 1번 선언하면 바꿀수있음 변할수있는 값

const i2 = 2 ; // const
// 1번 선언하면 바꿀수없음 변할수없는 값

// 변수의 규칙
//1.문자와 숫자 $과_만 사용가능
let a@ = 1 // X
let ad = 1 // O
// 2.첫글자는 숫자가 될수 없더
let 1x = 1 // X
let x1 = 1 // O
// 3.예약어 사용 불가능
let let ddd = 1 // X
// 4.가급적 상수는 대문자로 알려주어야한다.
const Addd = true // O
// 5.변수명은 읽고 쉽게 이해 할수있게선언
let abc = 1 // X
let first = 1 // O

// 연산

const math1 = 1+1 // 덧샘
const math2 = 2-1 // 뺄샘
const math3 = 1*2 // 곱셈
const math4 = 2/1 // 나눗샘
const math5 = 2%1 // 나머지

const Nan = "Nan"/2 // Not the Number의약자 문자열을 숫자로 나누면 나옴 

// unfined와 null
let adf ;
console.log(adf) ; // 변수가 할당안됨

let adr = null ; 
// null은 객채가 아님

// typeof연산자

console.log(typeof "a")
console.log(typeof 1)
console.log(typeof true)
console.log(typeof 1==1)
console.log(typeof a+abc)
console.log(typeof null)

// 문자형조함

const letera = "a" ;
const leterb = "는 아니다" ;

console.log(letera+leterb) ;

// alert prompt confirm

alert("알려줌") // 알려줌
// 실행시 매세지박스를 띄움 
// 사용자가 확인을 누르기전까지 띄워져있음
prompt() // 입력받음
// 입력 받을수있는 박스가 뜸
// 아무것도 입력안하면 null을 변환함
confirm() // 확인받음
// alert와 다르게 취소버튼이 있음
// true와 false를 변환

// 스타일링을 불가능
// 스크립트가 중단됨

// 형변환

String() // 문자형으로 변환
Number() // 숫자형으로 변환
Boolean() // 볼린형으로 변환
