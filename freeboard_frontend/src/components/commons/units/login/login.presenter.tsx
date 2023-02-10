import * as S from "./login.styles";
export default function LoginUI(): JSX.Element {
  return (
    <S.Wrapper>
      <S.EmailInput type="text" placeholder="이메일을 입력해주세요" />
      <S.PasswordInput type="password" placeholder="비밀번호를 입력해주세요" />
      <span>로그인 상태 유지</span>
      <S.LoginBtn>로그인하기</S.LoginBtn>
      <S.DivideLine />
      <S.EmailFindBtn>이메일 찾기</S.EmailFindBtn>
      <S.PasswordFindBtn>비밀번호 찾기</S.PasswordFindBtn>
      <S.MoveToSignupBtn>회원가입</S.MoveToSignupBtn>
    </S.Wrapper>
  );
}
