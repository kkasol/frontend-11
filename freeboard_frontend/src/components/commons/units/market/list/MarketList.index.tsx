import { useQuery } from "@apollo/client";
import {
  FETCH_USED_ITEMS,
  // FETCH_USED_ITEMS_COUNT_IBOUGHT,
} from "./MarketList.queries";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  // IQueryFetchUseditemsIBoughtArgs,
} from "../../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import type { MouseEvent, ChangeEvent } from "react";
import { useState } from "react";
import _ from "lodash";
import * as S from "./MarketList.styles";
// import Pagination from "../../../../../commons/pagination/Pagination.container";
import { v4 as uuidv4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";
import { useAuth } from "../../../../../commons/hooks/useAuth";

export default function MarketList(): JSX.Element {
  useAuth();
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  // const { data: dataUseditemCount } = useQuery<
  //   Pick<IQuery, "fetchUseditemsCountIBought">,
  //   IQueryFetchUseditemsIBoughtArgs
  // >(FETCH_USED_ITEMS_COUNT_IBOUGHT);

  const onClickToFinish = (event: MouseEvent<HTMLDivElement>): void => {
    if (event.target instanceof HTMLDivElement)
      router.push(`./market/${event.target.id}`);
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
      {" "}
      <S.BoardList>
        <S.BoardHeader>
          <S.BoardHeaderId>ID</S.BoardHeaderId>
          <S.BoardHeaderTitle>제목</S.BoardHeaderTitle>
          <S.BoardHeaderWriter>작성자</S.BoardHeaderWriter>
          <S.BoardHeaderDate>날짜</S.BoardHeaderDate>
        </S.BoardHeader>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={true}
        >
          {data?.fetchUseditems?.map((el) => (
            <S.BoardBody key={el._id}>
              <S.BoardBodyId>{el._id.slice(-4)}</S.BoardBodyId>
              <S.BoardBodyTitle id={el._id} onClick={onClickToFinish}>
                {el.remarks
                  .slice(0, 25)
                  .replaceAll(keyword, `!@#${keyword}!@#`)
                  .split("!@#")
                  .map((el) => (
                    <span
                      key={uuidv4()}
                      style={{ color: el === keyword ? "gray" : "black" }}
                    >
                      {el}
                    </span>
                  ))}
              </S.BoardBodyTitle>
              <S.BoardBodyWriter>{el._id?.slice(0, 4)}</S.BoardBodyWriter>
              <S.BoardBodyDate>{el.createdAt.slice(0, 10)}</S.BoardBodyDate>
            </S.BoardBody>
          ))}
        </InfiniteScroll>

        <S.SearchInput>
          <S.Search
            type="text"
            onChange={onChangeSearch}
            placeholder="검색어를 입력해주세요"
          />
        </S.SearchInput>
        {/* <Pagination refetch={refetch} count={count} /> */}
      </S.BoardList>{" "}
    </S.Wrapper>
  );
}
