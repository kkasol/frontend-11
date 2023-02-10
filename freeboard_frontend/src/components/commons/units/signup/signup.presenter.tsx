import * as S from "./signup.styles";
export default function SignUpUI(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.InputTitle>회원가입</S.InputTitle>
        <S.TextInput type="text" placeholder="이메일을 입력해주세요" />
        <S.InputTitle>이름</S.InputTitle>
        <S.TextInput type="text" placeholder="이름을 입력해주세요" />
        <S.InputTitle>비밀번호</S.InputTitle>
        <S.TextInput type="password" placeholder="비밀번호를 입력해주세요" />
        <S.InputTitle>비밀번호 확인</S.InputTitle>
        <S.TextInput type="password" placeholder="비밀번호를 입력해주세요" />
        <S.FinishBtn>
          <S.SignUpBTN>회원가입하기</S.SignUpBTN>
        </S.FinishBtn>
      </S.Wrapper>
    </>
  );
}
