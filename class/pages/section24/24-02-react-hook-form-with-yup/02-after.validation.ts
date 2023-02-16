import * as yup from "yup";

export const schema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요."),
  title: yup.string().required("제목을 입력해주세요."),
  contents: yup.string().required("내용을 입력해주세요."),

  email: yup
    .string()
    .email("이메일 형식이 아닙니다.")
    .required("이메일을 입력해주세요"),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리입니다.")
    .max(15, "비밀번호는 최대 15자리입니다.")
    .required("비밀번호를 입력해주세요."),
  //   phone: yup
  //     .string()
  //     .matches(/^\d{3}-\d{3, 4}-\d{4}$/, "휴대폰 번호 형식에 맞지 않습니다.")
  //     .required("전화번호를 입력해주세요"),
});
