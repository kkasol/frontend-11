import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const client = new ApolloClient({
    // uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    uri: "http://34.64.114.80/graphql",
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
