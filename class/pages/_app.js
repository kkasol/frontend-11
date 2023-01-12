// import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ Component }) {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), //컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시로 저장해 놓기 => 나중에 더 자세히 알아보기
  }); //그래프큐엘 세팅

  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider> // 이게 있어야 그래프큐엘 사용 가능
  );
}
