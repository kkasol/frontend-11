import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generated/types";
import type { MouseEvent } from "react";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  // const onClickPage1 = (event: MouseEvent<HTMLSpanElement>): void => {
  //   void refetch({ page: Number(event.currentTarget.id) });
  // };
  // const onClickPage2 = (event: MouseEvent<HTMLSpanElement>): void => {
  //   void refetch({ page: Number(event.currentTarget.id) });
  // };
  // const onClickPage3 = (event: MouseEvent<HTMLSpanElement>): void => {
  //   void refetch({ page: Number(event.currentTarget.id) });
  // };
  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };
  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };
  return (
    <>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
          </div>
        ))}
        <span onClick={onClickPrevPage}>이전 페이지</span>
        {new Array(10)
          .fill(1)
          .map(
            (_, index) =>
              index + startPage <= lastPage && (
                <span
                  key={index + startPage}
                  id={String(index + startPage)}
                  onClick={onClickPage}
                  style={{ margin: "5px" }}
                ></span>
              )
          )}

        <span onClick={onClickNextPage}>다음 페이지</span>
        {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))} */}
        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, index) => (
        <span key={el} id={String(el)} onClick={onClickPage}>
          {el}
        </span>
      ))} */}

        {/* <span id="1" onClick={onClickPage1}>
        1
      </span> */}
        {/* <span id="2" onClick={onClickPage2}>
        2
      </span>
      <span id="3" onClick={onClickPage3}>
        3 */}
        {/* </span> */}
      </div>
    </>
  );
}
