import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.query";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function BoardList() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  const router = useRouter();
  const onClickToFinish = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement)
      router.push(`./boards/${event.target.id}`);
  };

  return <BoardListUI data={data} onClickToFinish={onClickToFinish} />;
}
