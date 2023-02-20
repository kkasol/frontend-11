import * as S from "./MarketDetail.styles";

import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { useAuth } from "../../../../../commons/hooks/useAuth";
// import MarketCommentWrite from "../MarketComment/CommentWrite/CommentWriteContainer";
export const FETCH_USED_ITEM = gql`
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
      # useditemAddress
      createdAt
    }
  }
`;

export default function MarketDetail() {
  useAuth();
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: `${router.query.useditemId}`,
    },
  });

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.HeaderInfo>
            <S.SellerIcon src="/Vector.png"></S.SellerIcon>
            <S.SellerDate>
              <S.Seller>{data?.fetchUseditem?._id.slice(0, 4)}</S.Seller>
              <S.Date>{data?.fetchUseditem?.createdAt.slice(0, 10)}</S.Date>
            </S.SellerDate>
          </S.HeaderInfo>
          <S.ShareIcon>
            <S.Share src="/share.png"></S.Share>
            <S.Navigation src="/address.png"></S.Navigation>
          </S.ShareIcon>
        </S.Header>

        <S.Remarks>{data?.fetchUseditem?.remarks}</S.Remarks>
        <S.ProductName>{data?.fetchUseditem?.name}</S.ProductName>
        <S.LikeIcon></S.LikeIcon>
        <S.Price>{data?.fetchUseditem?.price}원</S.Price>
        <S.ImagesWrapper>
          {data?.fetchUseditem.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <S.Images key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
        </S.ImagesWrapper>
        <S.Contents>{data?.fetchUseditem?.contents}</S.Contents>
        <S.Tags>{data?.fetchUseditem?.tags}</S.Tags>
        <S.Maps></S.Maps>
        <S.BtnSection>
          <S.MoveToProductList>목록으로</S.MoveToProductList>
          <S.ByuBtn>수정하기</S.ByuBtn>
        </S.BtnSection>
      </S.Wrapper>
      {/* <MarketCommentWrite /> */}
    </>
  );
}
