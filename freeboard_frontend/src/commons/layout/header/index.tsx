import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { gql, useMutation, useQuery } from "@apollo/client";
import { IQuery } from "../../types/generated/types";
import { useEffect, useState } from "react";
import ChargeModal from "../../modal/modal01";
const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        amount
      }
    }
  }
`;
const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      amount
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
const HeaderMenu = styled.div`
  margin-right: 350px;
  display: flex;
  flex-direction: row;
`;
const MoveToJoin = styled.div`
  margin-right: 40px;
  font-size: 20px;
`;
const MoveToLogin = styled.div`
  margin-right: 50px;
  font-size: 20px;
`;
const Basket = styled.div`
  font-size: 20px;
`;
const CartItems = styled.div`
  width: 30px;
  height: 30px;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin-left: 5px;
`;
const PointAmount = styled.div`
  font-size: 20px;
  margin-right: 20px;
`;
const MoveToPoint = styled.div`
  font-size: 20px;
  margin-right: 50px;
`;
const MoveToLogout = styled.div`
  font-size: 20px;
  margin-right: 60px;
`;
export default function LayoutHeader(): JSX.Element {
  const [accessToken, setAccessToken] = useState("");
  const [logoutUser] = useMutation(LOGOUT_USER);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAccessToken(token);
    }
  }, []);
  const router = useRouter();

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onCharge = async (amount: Number) => {
    const charge = await createPointTransactionOfLoading({
      variables: { impUid: "imp49910675" },
    });
  };

  console.log(data?.fetchUserLoggedIn.name);
  const onClickJoin = (): void => {
    router.push("/join");
  };
  const onClickLogin = (): void => {
    router.push("/login");
  };

  const onClickLogout = async () => {
    try {
      localStorage.removeItem("accessToken");

      await logoutUser();
    } catch (error) {
      console.error(error);
    }
    router.push("/");
    // 리페치
  };

  return (
    <Wrapper>
      <HeaderMenu>
        {accessToken ? (
          <>
            <PointAmount>
              {data?.fetchUserLoggedIn.name} 님 환영합니다!
            </PointAmount>

            <MoveToLogout onClick={onClickLogout}>로그아웃</MoveToLogout>
          </>
        ) : (
          <>
            <MoveToLogin onClick={onClickLogin}>로그인</MoveToLogin>
            <MoveToJoin onClick={onClickJoin}>회원가입</MoveToJoin>
          </>
        )}
      </HeaderMenu>
      {/* <ChargeModal isOpen={isModalOpen} closeModal={closeModal} /> */}
    </Wrapper>
  );
}
