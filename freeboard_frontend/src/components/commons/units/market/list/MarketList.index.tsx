import { useQuery } from "@apollo/client";

import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useState } from "react";
import _ from "lodash";
import * as S from "./MarketList.styles";
import InfiniteScroll from "react-infinite-scroller";

import { FETCH_USED_ITEMS } from "./MarketList.queries";
// import TodayItem from "../../../../common/layout/todayItem";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../../commons/types/generated/types";

export default function MarketList(): JSX.Element {
  const router = useRouter();
  const [basketItems, setBasketItems] = useState<IUseditem[]>([]);

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const onClickBasket = (basket: IUseditem) => {
    const baskets: IUseditem[] = JSON.parse(
      localStorage.getItem("baskets") ?? "[]"
    );
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length >= 1) {
      return;
    }

    if (baskets.length >= 3) {
      baskets.splice(0, 1);
      baskets.push(basket);
    } else {
      baskets.push(basket);
    }
    localStorage.setItem("baskets", JSON.stringify(baskets));

    setBasketItems((prev) => [...prev, basket]);
  };
  const onClickToDetail =
    (el: IUseditem) => (event: MouseEvent<HTMLDivElement>) => {
      onClickBasket(el);
      router.push(`market/${event?.currentTarget?.id}`);
    };

  const onLoadMore = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchUseditems === undefined)
          return { fetchUseditems: [...prev.fetchUseditems] };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  return (
    <S.Wrapper>
      <S.BoardList>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={true}
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {data?.fetchUseditems?.map((el) => (
            <S.BoardBody key={el._id} id={el._id} onClick={onClickToDetail(el)}>
              {el.images[0] ? (
                <S.MarketBodyImage
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
              ) : (
                <S.MarketBodyImage src={`/basicImage.png`} />
              )}
              <S.MarketRow>
                <S.MarketColumn>
                  <S.BoardBodyId>{el.name}</S.BoardBodyId>
                  <S.BoardBodyPrice>{el.price}원</S.BoardBodyPrice>
                </S.MarketColumn>
                <S.BoardBodyDate>{el.createdAt.slice(0, 10)}</S.BoardBodyDate>
              </S.MarketRow>
            </S.BoardBody>
          ))}
        </InfiniteScroll>
      </S.BoardList>{" "}
    </S.Wrapper>
  );
}
