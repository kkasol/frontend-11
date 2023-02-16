import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("이름을 입력해주세요."),
  email: yup
    .string()
    .email("이메일 형식이 아닙니다.")
    .required("이메일을 입력해주세요"),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리입니다.")
    .max(15, "비밀번호는 최대 15자리입니다.")
    .required("비밀번호를 입력해주세요."),
//   passwordCheck: yup
//     .string()
//     .min(4, "비밀번호는 최소 4자리입니다.")
//     .max(15, "비밀번호는 최대 15자리입니다.")
//     .required("비밀번호를 입력해주세요."),
});
