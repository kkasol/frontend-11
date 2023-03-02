import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS } from "./MarketList.queries";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { MouseEvent, ChangeEvent, useEffect } from "react";
import { useState } from "react";
import _ from "lodash";
import * as S from "./MarketList.styles";
import { v4 as uuidv4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";
import { useAuth } from "../../../../../commons/hooks/useAuth";

export default function MarketList(): JSX.Element {
  useAuth();
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [basketItems, setBasketItems] = useState([]);

  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  // 비회원 장바구니에 클릭한 게시글을 넣어주는 함수
  const onClickBasket = (basket: IUseditem) => () => {
    const baskets: IUseditem[] = JSON.parse(
      localStorage.getItem("baskets") ?? "[]"
    );
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length >= 1) {
      alert("이미 담으신 물품입니다!!!");
      return;
    }

    baskets.push(basket);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  const onClickToDetail =
    (event: MouseEvent<HTMLDivElement>) => (el: IUseditem) => {
      if (event.target instanceof HTMLDivElement)
        router.push(`/market/${event.target?.id}`);
      onClickBasket(el);
    };

  const getDebounce = _.debounce((value) => {
    void refetch({
      search: value,
      page: 1,
    });
    setKeyword(value);
  }, 500);
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value);
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
      {basketItems.map((el: IUseditem) => (
        <div key={el._id} style={{ backgroundColor: "red" }}>
          <span>{el.name}</span>
          <span>{el.remarks}</span>
        </div>
      ))}
      <S.SearchInput>
        <S.Search
          type="text"
          onChange={onChangeSearch}
          placeholder="검색어를 입력해주세요"
        />
      </S.SearchInput>
      <S.BoardList>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={true}
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {data?.fetchUseditems?.map((el) => (
            <S.BoardBody key={el._id} onClick={onClickToDetail(el)} id={el._id}>
              <S.BoardBodyId>{el.name}</S.BoardBodyId>
              <S.MarketBodyImage
                src={`https://storage.googleapis.com/${el.images[0]}`}
              ></S.MarketBodyImage>
              <S.BoardBodyTitle id={el._id}>
                {el.remarks
                  .replaceAll(keyword, `!@#${keyword}!@#`)
                  .split("!@#")
                  .map((el) => (
                    <span
                      key={uuidv4()}
                      style={{ fontWeight: el === keyword ? "Bold" : "" }}
                    >
                      {el}
                    </span>
                  ))}
              </S.BoardBodyTitle>

              <S.BoardBodyDate>{el.createdAt.slice(0, 10)}</S.BoardBodyDate>
            </S.BoardBody>
          ))}
        </InfiniteScroll>
      </S.BoardList>{" "}
    </S.Wrapper>
  );
}
