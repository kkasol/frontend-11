import * as S from "../PaginationStyle/Pagination.styles";
import { IQuery } from "../../types/generated/types";
interface IPaginationUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickPrevPage: () => void;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickNextPage: () => void;
  startPage: any;
  choicePage: any;
  lastPage: any;
}

export default function PaginationUI(props: IPaginationUIProps) {
  return (
    <S.Wrapper>
      <S.MovePage
        onClick={props.onClickPrevPage}
        disabled={props.startPage === 1}
      >
        {"<"}
      </S.MovePage>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <S.IndexSpan
              key={index + props.startPage}
              id={String(index + props.startPage)}
              onClick={props.onClickPage}
              style={{
                margin: "10px",
                color:
                  index + props.startPage === props.choicePage ? "red" : "",
              }}
            >
              {index + props.startPage}
            </S.IndexSpan>
          )
      )}
      <S.MovePage
        onClick={props.onClickNextPage}
        disabled={props.startPage + 10 >= props.lastPage}
      >
        {">"}
      </S.MovePage>
    </S.Wrapper>
  );
}
