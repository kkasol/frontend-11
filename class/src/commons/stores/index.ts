import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState", // 변수명
  default: true,
});
