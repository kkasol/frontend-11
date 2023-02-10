import styled from "@emotion/styled";
import { useRouter } from "next/router";
const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const SignUpBtn = styled.button`
  width: 100px;
  height: 80px;
  border: none;
  margin-right: 40px;
`;
const LoginBtn = styled.button`
  margin-right: 50px;
  width: 100px;
  height: 80px;
  border: none;
`;
export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const onClickSignUp = (): void => {
    router.push("/signup");
  };
  const onClickLogin = (): void => {
    router.push("/login");
  };
  return (
    <Wrapper>
      <SignUpBtn onClick={onClickSignUp}>회원가입</SignUpBtn>
      <LoginBtn onClick={onClickLogin}>로그인</LoginBtn>
    </Wrapper>
  );
}
