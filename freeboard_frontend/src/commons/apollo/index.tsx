import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../stores/index";
interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken] = useRecoilState(accessTokenState);
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
