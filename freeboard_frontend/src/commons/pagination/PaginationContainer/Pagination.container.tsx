import PaginationUI from "../PaginationPresenter/Pagination.Presenter";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../types/generated/types";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
} from "../PaginationQuery/Pagination.query";

export default function Pagination() {
  const [startPage, setStartPage] = useState(1);
  const [choicePage, setChoicePage] = useState();

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
    setChoicePage(Number(event.currentTarget.id));
  };
  console.log(startPage, lastPage);
  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };
  return (
    <PaginationUI
      data={data}
      onClickPrevPage={onClickPrevPage}
      onClickPage={onClickPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      choicePage={choicePage}
      lastPage={lastPage}
    />
  );
}
