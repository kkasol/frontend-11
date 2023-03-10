import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import MarketWrite from "../../../../src/components/commons/units/market/write/MarketWrite.presenter";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      # pickedCount
      useditemAddress {
        address
      }
      createdAt
    }
  }
`;
export default function MarketEditPage() {
  const router = useRouter();
  if (typeof router.query.useditemId !== "string") return <></>;

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });
  return <MarketWrite isEdit={true} data={data} />;
}
