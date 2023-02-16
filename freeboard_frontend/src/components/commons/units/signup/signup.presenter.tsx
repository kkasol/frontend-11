import * as S from "./signup.styles";
import { ChangeEvent } from "react";
interface ISignUpUIProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignUp: () => void;
}
export default function SignUpUI(props: ISignUpUIProps): JSX.Element {
  return (
    <form>
      <S.Wrapper>
        <S.InputTitle>회원가입</S.InputTitle>
        <S.InputTitle>이메일</S.InputTitle>
        <S.TextInput
          onChange={props.onChangeEmail}
          type="text"
          placeholder="이메일을 입력해주세요"
        />
        <S.InputTitle>이름</S.InputTitle>
        <S.TextInput
          onChange={props.onChangeName}
          type="text"
          placeholder="이름을 입력해주세요"
        />
        <S.InputTitle>비밀번호</S.InputTitle>
        <S.TextInput
          onChange={props.onChangePassword}
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        {/* <S.InputTitle>비밀번호 확인</S.InputTitle>
        <S.TextInput
          onChange={props.onChangePasswordCheck}
          type="password"
          placeholder="비밀번호를 입력해주세요"
        /> */}
        <S.FinishBtn>
          <S.SignUpBTN onClick={props.onClickSignUp}>회원가입</S.SignUpBTN>
        </S.FinishBtn>
      </S.Wrapper>
    </form>
  );
}
