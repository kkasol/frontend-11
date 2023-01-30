import * as st from "./CommentFinish.styles";
import { MouseEventHandler } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

interface IProps {
  commentData: Pick<IQuery, "fetchBoardComments"> | undefined;
  data?: Pick<IQuery, "fetchBoardComments">;

  onClickCommentDelete: MouseEventHandler<HTMLImageElement>;
  setStar: any;
  star: any;
}

export default function BoardCommentFinishUI(props: IProps) {
  return (
    <div>
      <st.Footer>
        <st.Line></st.Line>
        {props.data?.fetchBoardComments.map((el) => (
          <st.Comment1 key={el._id}>
            <st.CommentColumn>
              <st.CommentRow>
                <st.WriterImage src="/Vector.png" />
                <st.RatingContents>
                  <st.WriterRating>
                    <st.Comment1Writer>{el.writer}</st.Comment1Writer>
                    <st.Star value={el.rating} disabled />
                  </st.WriterRating>
                  <st.Comment1Contents>{el.contents}</st.Comment1Contents>
                  <st.Star onChange={props.star} />
                </st.RatingContents>
              </st.CommentRow>
              <st.Comment1Date>{el.createdAt.slice(0, 10)}</st.Comment1Date>
            </st.CommentColumn>
            <st.CommentDelete
              src="/x.png"
              onClick={props.onClickCommentDelete}
              id={el._id}
            />
          </st.Comment1>
        ))}
        <st.Line></st.Line>
      </st.Footer>
    </div>
  );
}
