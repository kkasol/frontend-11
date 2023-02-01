import PaginationUI from "../PaginationPresenter/Pagination.Presenter";
import { ApolloQueryResult } from "@apollo/client";
import type { MouseEvent } from "react";
import { useState } from "react";
import { IQuery, IQueryFetchBoardsArgs } from "../../types/generated/types";
interface IPaginationProps {
  count: number;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export default function Pagination(props: IPaginationProps): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const [choicePage, setChoicePage] = useState(1);
  const lastPage = Math.ceil((props.count ?? 10) / 10);

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setChoicePage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    const choicePage = Number(event.currentTarget.id);
    setChoicePage(choicePage);
    void props.refetch({ page: choicePage });
  };
  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setChoicePage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };
  return (
    <PaginationUI
      onClickPrevPage={onClickPrevPage}
      onClickPage={onClickPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      choicePage={choicePage}
      lastPage={lastPage}
    />
  );
}
