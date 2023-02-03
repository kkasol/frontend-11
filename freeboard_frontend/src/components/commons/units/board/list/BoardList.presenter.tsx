import * as St from "./BoardList.styles";
import { IQuery } from "../../../../../commons/types/generated/types";
import { MouseEvent } from "react";
import Pagination from "../../../../../commons/pagination/Pagination.container";
import { IQueryFetchBoardsArgs } from "../../../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

interface IBoardListUIProps {
  data: Pick<IQuery, "fetchBoards"> | undefined;
  onClickToFinish: (event: MouseEvent<HTMLDivElement>) => void;
  refetch?: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
}

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <St.Wrapper>
      <St.BoardList>
        <St.BoardHeader>
          <St.BoardHeaderId>ID</St.BoardHeaderId>
          <St.BoardHeaderTitle>제목</St.BoardHeaderTitle>
          <St.BoardHeaderWriter>작성자</St.BoardHeaderWriter>
          <St.BoardHeaderDate>날짜</St.BoardHeaderDate>
        </St.BoardHeader>
        {props.data?.fetchBoards?.map((el) => (
          <St.BoardBody key={el._id}>
            <St.BoardBodyId>{el._id.slice(-4)}</St.BoardBodyId>
            <St.BoardBodyTitle id={el._id} onClick={props.onClickToFinish}>
              {el.title}
            </St.BoardBodyTitle>
            <St.BoardBodyWriter>{el.writer}</St.BoardBodyWriter>
            <St.BoardBodyDate>{el.createdAt.slice(0, 10)}</St.BoardBodyDate>
          </St.BoardBody>
        ))}
        <Pagination refetch={props.refetch} count={props.count} />
      </St.BoardList>
    </St.Wrapper>
  );
}
