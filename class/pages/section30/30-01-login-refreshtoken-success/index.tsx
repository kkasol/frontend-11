import { gql, useApolloClient, useQuery } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
import type { IQuery } from "../../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage(): JSX.Element {
  // 1. 페이지 접속하면 자동으로 data에 받아지고(data는 글로벌스테이트에 저장) 리렌더링 됨

  // 2. 버튼 클릭 시 data에 받아지고(data는 글로벌스테이트에  저장) 리렌더링 됨
  // const [나의함수, { data }] = useLazyQuery(FETCH_USER_LOGGED_IN);

  // 3. axios처럼 사용하는 방법
  // const client = useApolloClient();
  // client.query({}) <==> axios.get();

  const client = useApolloClient();

  const onClickButton = async (): Promise<void> => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };

  return <button onClick={wrapAsync(onClickButton)}>클릭하세요</button>;

  // return <>{data?.fetchUserLoggedIn.name} 님 환영합니다!</>;
}
