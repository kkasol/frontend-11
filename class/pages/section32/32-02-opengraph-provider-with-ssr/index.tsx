// 제공자일 떄 => 네이버, 다음, 쿠팡 등

import { useQuery } from "@apollo/client";
import { async } from "@firebase/util";
import { gql, GraphQLClient } from "graphql-request";
import Head from "next/head";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;

export default function OpengraphProviderPage(props: any): JSX.Element {
  // const { data } = useQuery(FETCH_USED_ITEM, {
  //   variables: { useditemId: "63ffe9bcaef9f000281b308d" },
  // });

  return (
    <>
      <Head>
        <meta property="og:title" content={props.qqq.name} />
        <meta property="og:description" content={props.qqq.remarks} />
        <meta property="og:image" content={props.qqq.images?.[0]} />
      </Head>

      <div>중고마켓에 오신 것을 환영합니다!(여기는 Body입니다)</div>
    </>
  );
}

// 1. getServerSideProps는 이미 존재하는 단어이므로 마음대로 변경 불가(백엔드에 데이터 요청 로직)
// 2. 여기는 서버에서만 실행됨(프론트엔드 서버 프로그램)
export const getServerSideProps = async (): Promise<any> => {
  console.log(":여기는 서버입니다");
  // 1. 여기서 API 요청
  const graphQLClient = new GraphQLClient(
    "https://backend-practice.codebootcamp.co.kr/graphql"
  );
  const result = await graphQLClient.request(FETCH_USED_ITEM, {
    useditemId: "63ffe9bcaef9f000281b308d",
  });

  // 2. 받은 결과를 return
  return {
    props: {
      qqq: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images,
      },
    },
  };
};
