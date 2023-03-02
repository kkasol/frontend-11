import * as S from "./login.styles";
import { ChangeEvent, MouseEventHandler } from "react";
interface ILoginUIProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: MouseEventHandler<HTMLButtonElement>;
}
export default function LoginUI(props: ILoginUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Title>로그인</S.Title>
      <S.InputWrapper>
        <S.TextInput
          type="text"
          placeholder="이메일을 입력해주세요"
          onChange={props.onChangeEmail}
        />
        <S.TextInput
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={props.onChangePassword}
        />
      </S.InputWrapper>
      <span>로그인 상태 유지</span>
      <S.LoginBtnWrapper>
        <S.LoginBtn onClick={props.onClickLogin}>로그인하기</S.LoginBtn>
      </S.LoginBtnWrapper>
      <S.DivideLine />
      <S.BtnTriple>
        <S.Btn>이메일 찾기</S.Btn>
        <S.Btn>비밀번호 찾기</S.Btn>
        <S.Btn>회원가입</S.Btn>
      </S.BtnTriple>
    </S.Wrapper>
  );
}
