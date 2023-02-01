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

  const { data, refetch } = useQuery<
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

  return (
    <BoardListUI
      data={data}
      onClickToFinish={onClickToFinish}
      count={dataBoardsCount?.fetchBoardsCount}
      refetch={refetch}
    />
  );
}
