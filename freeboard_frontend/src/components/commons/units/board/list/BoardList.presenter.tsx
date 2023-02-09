import * as St from "./BoardList.styles";
import { IQuery } from "../../../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent } from "react";
import Pagination from "../../../../../commons/pagination/Pagination.container";
import { IQueryFetchBoardsArgs } from "../../../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
interface IBoardListUIProps {
  data: Pick<IQuery, "fetchBoards"> | undefined;
  onClickToFinish: (event: MouseEvent<HTMLDivElement>) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
  keyword: any;
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
              {el.title
                .slice(0, 25)
                .replaceAll(props.keyword, `!@#${props.keyword}!@#`)
                .split("!@#")
                .map((el) => (
                  <span
                    key={uuidv4()}
                    style={{ color: el === props.keyword ? "gray" : "black" }}
                  >
                    {el}
                  </span>
                ))}
            </St.BoardBodyTitle>
            <St.BoardBodyWriter>{el.writer?.slice(0, 12)}</St.BoardBodyWriter>
            <St.BoardBodyDate>{el.createdAt.slice(0, 10)}</St.BoardBodyDate>
          </St.BoardBody>
        ))}
        <St.SearchInput>
          <St.Search
            type="text"
            onChange={props.onChangeSearch}
            placeholder="검색어를 입력해주세요"
          />
        </St.SearchInput>
        <Pagination refetch={props.refetch} count={props.count} />
      </St.BoardList>
    </St.Wrapper>
  );
}
