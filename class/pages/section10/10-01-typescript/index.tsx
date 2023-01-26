export default function TypescriptPage() {
  //타입 추론
  let aaa = "안녕하세요";
  aaa = 3;

  //타입 명시
  let bbb: string = "반갑습니다";
  bbb = 10;

  //타입 명시가 필요한 상황
  let ccc: number | string = 1000;
  ccc = "1000원";

  //숫자 타입
  let ddd = 10;
  ddd = "철수";

  //불린 타입
  let eee: boolean = true;
  eee = false;
  eee = "false"; // ->true로 작동함

  //배열 타입
  let fff: number[] = [1, 2, 3, 4, 5, "안녕하세요"];
  let ggg: string[] = ["철수", "영희", "훈이", 10];
  let hhh: (string | number)[] = ["철수", "영희", "훈이", 10]; //타입을 추론해서 어떤 타입을 사용하는지 알아보기

  //객체 타입
  interface IProfile {
    name: string;
    age: string | number;
    school: string;
    hobby?: string;
  }

  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  };
  profile.name = "훈이"; //타입 추론으로 이것만 가능
  profile.age = "8살";
  profile.hobby = "수영";

  //함수 타입
  function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
  }
  add(1000, 2000, "원");
  const result = add(1000, 2000, "원"); //결과의 리턴 타입도 예측 가능

  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
  };
  add2(1000, 2000, "원");
  const result2 = add(1000, 2000, "원"); //결과의 리턴 타입도 예측 가능

  //any 타입
  let qqq: any = "철수"; //자바스크립트와 동일
  qqq = 123;
  qqq = true;

  return <></>;
}
