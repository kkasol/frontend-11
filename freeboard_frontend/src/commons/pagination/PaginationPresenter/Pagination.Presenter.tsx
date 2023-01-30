import * as S from "../PaginationStyle/Pagination.styles";
import { IQuery } from "../../types/generated/types";

interface IPaginationUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickPrevPage: () => void;
  onClickPage: (event: HTMLSpanElement) => void;
  onClickNextPage: () => void;
  startPage: any;
  choicePage: any;
  lastPage: any;
}

export default function PaginationUI(props: IPaginationUIProps) {
  return (
    <>
      <div>
        {props.data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
          </div>
        ))}

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
                  margin: "5px",
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
      </div>
    </>
  );
}
