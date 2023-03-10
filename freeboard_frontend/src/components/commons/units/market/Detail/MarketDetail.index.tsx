import * as S from "./MarketDetail.styles";

import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
  IUseditem,
} from "../../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { useAuth } from "../../../../../commons/hooks/useAuth";
import KakaoMapDetailPage from "../../../../../commons/library/kakaomapDetail";
import { useState } from "react";

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
      seller {
        name
      }
      useditemAddress {
        address
      }
      createdAt
    }
  }
`;

export const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;
export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
    }
  }
`;
export default function MarketDetail() {
  useAuth();
  const router = useRouter();
  const [cartItems, setCartItems] = useState<IUseditem[]>([]);

  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: `${router.query.useditemId}`,
    },
  });
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const onClickPick = async () => {
    const result = await toggleUseditemPick({
      variables: {
        useditemId: router.query.useditemId,
      },
    });
  };
  const onClickMoveToList = () => {
    router.push("/market");
  };
  const onClickMoveToEdit = () => {
    if (typeof router.query.useditemId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }

    void router.push(`/market/${router.query.useditemId}/edit`);
  };
  const addressData = data?.fetchUseditem.useditemAddress?.address;
  const onClickBuy = async () => {
    const result = await createPointTransactionOfBuyingAndSelling({
      variables: {
        useritemId: router.query.useditemId,
      },
    });
    alert("상품 구매에 성공했습니다!");
  };
  const onClickCart = (cartItem: IUseditem) => (event: MouseEvent) => {
    const cartItems: IUseditem[] = JSON.parse(
      localStorage.getItem("cartItems") ?? "[]"
    );
    const temp = cartItems.filter((el) => el._id === cartItem._id);
    if (temp.length >= 1) {
      alert("이미 담긴 상품입니다!");
      return;
    }
    cartItems.push(cartItem);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    setCartItems(cartItems);
  };
  console.log(router.query);

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.HeaderInfo>
            <S.SellerIcon src="/Vector.png"></S.SellerIcon>
            <S.SellerDate>
              <S.Seller>{data?.fetchUseditem.seller?.name}</S.Seller>
              <S.Date>{data?.fetchUseditem.createdAt.slice(0, 10)}</S.Date>
            </S.SellerDate>
          </S.HeaderInfo>
          <S.ShareIcon>
            <S.Share src="/share.png"></S.Share>
            <S.Navigation src="/address.png"></S.Navigation>
          </S.ShareIcon>
        </S.Header>

        <S.Remarks>{data?.fetchUseditem.remarks}</S.Remarks>
        <S.ProductName>{data?.fetchUseditem.name}</S.ProductName>
        {data?.fetchUseditem.pickedCount === 0 ? (
          <S.PickContents onClick={onClickPick}>
            <img
              src="/heart0.png"
              style={{
                width: "16px",
                height: "16px",
                marginRight: "10px",
              }}
            />
          </S.PickContents>
        ) : (
          <S.PickContents onClick={onClickPick}>
            <img
              src="/heart1.png"
              style={{
                width: "16px",
                height: "16px",
                marginRight: "10px",
              }}
            />
          </S.PickContents>
        )}
        <S.Price>{data?.fetchUseditem?.price}원</S.Price>
        <S.ImagesWrapper>
          {data?.fetchUseditem.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <S.Images key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
        </S.ImagesWrapper>
        <S.Contents
          dangerouslySetInnerHTML={{
            __html: data?.fetchUseditem?.contents,
          }}
        />
        <S.Tags>{data?.fetchUseditem?.tags}</S.Tags>
        <KakaoMapDetailPage addressData={addressData} />
        <S.Basket onClick={onClickCart(data?.fetchUseditem)}>장바구니</S.Basket>

        <S.BuyBtn onClick={onClickBuy}>바로 구매</S.BuyBtn>

        <S.BtnSection>
          <S.MoveToProductList onClick={onClickMoveToList}>
            목록으로
          </S.MoveToProductList>
          <S.EditBtn onClick={onClickMoveToEdit}>수정하기</S.EditBtn>
        </S.BtnSection>
      </S.Wrapper>
    </>
  );
}
