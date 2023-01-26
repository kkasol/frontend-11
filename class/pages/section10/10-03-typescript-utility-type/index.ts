import { Profiler } from "inspector";

export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

//1. Partial 타입(전부 물음표 붙음)
type aaa = Partial<IProfile>;

//2. Required 타입(전부 물음표 사라짐)
type bbb = Required<IProfile>;

//3. Pick 타입(원하는 것만 가져옴)
type ccc = Pick<IProfile, "name" | "age">;

//4. Omit 타입
type ddd = Omit<IProfile, "school">;

//5. Record 타입
type eee = "철수" | "영희" | "훈이"; // Union 타입
let child: eee = "영희"; // 철수,영희,훈이 중에 들어가야됨
let child2: string = "철수"; // 모든 string타입이 다 들어갈수 있음

type fff = Record<eee, IProfile>; // Record 타입 key 안에 객체?

//6. 객체의 key들로 Union타입 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby"
let myProfile: ggg = "name";

//7. type vs interface 차이 => interface는 선언병합 가능
export interface IProfile {
  candy: number; //선언병합으로 추가됨
}

//8. 배운 것 응용
let profile: Partial<IProfile> = {
  candy: 10,
};
