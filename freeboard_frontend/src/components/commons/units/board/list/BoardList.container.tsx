import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.query";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function BoardList() {
  const router = useRouter();

  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickToFinish = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement)
      router.push(`./boards/${event.target.id}`);
  };
  const onLoadMore = () => {
    if (data === undefined) return;
    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10 / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoards === undefined) {
          return {
            FetchBoards: [...prev.fetchBoards],
          };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };
  return (
    <BoardListUI
      data={data}
      onClickToFinish={onClickToFinish}
      count={dataBoardsCount?.fetchBoardsCount}
      refetch={refetch}
      onLoadMore={onLoadMore}
    />
  );
}
