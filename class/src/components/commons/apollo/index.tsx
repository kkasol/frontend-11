import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // 프리렌더링 예제 - process.brower ㅏㅇ법
  //   if (process.browser) {
  //     console.log("나는 지금 브라우저다!");
  //     const result = localStorage.getItem("accessToken");
  //     setAccessToken(result ?? "");
  //   } else {
  //     console.log(
  //       "지금은 프론트엔드 서버다!(yarn dev로 실행시킨 프로그램 내부다!)"
  //     );
  //   }
  // // 프리렌더링 예제 : typeof window 방법
  //   if (typeof window !== "undefined") {
  //     console.log("나는 지금 브라우저다");
  //   } else {
  //     ("지금은 프론트엔드 서버다!");
  //   }
  // 3 . 프리렌더링 useEffet
  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    setAccessToken(result ?? "");
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시로 저장해 놓기 => 나중에 더 자세히 알아보기
  }); // 그래프큐엘 세팅

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
