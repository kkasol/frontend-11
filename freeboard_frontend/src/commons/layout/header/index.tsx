import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../types/generated/types";
const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const MemberTitle = styled.div``;
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
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const onClickSignUp = (): void => {
    router.push("/signup");
  };
  const onClickLogin = (): void => {
    router.push("/login");
  };
  return (
    <Wrapper>
      <MemberTitle>{data?.fetchUserLoggedIn.name} 님 환영합니다!</MemberTitle>
      <SignUpBtn onClick={onClickSignUp}>회원가입</SignUpBtn>
      <LoginBtn onClick={onClickLogin}>로그인</LoginBtn>
    </Wrapper>
  );
}
