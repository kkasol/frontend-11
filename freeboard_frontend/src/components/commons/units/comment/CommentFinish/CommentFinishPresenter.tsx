import * as st from "./Comment.styles";
import { ChangeEvent, MouseEventHandler, ChangeEventHandler } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller";
import type { IBoardComment } from "../../../../commons/types/generated/types";

interface IBoardCommentUIProps {
  commentData: Pick<IQuery, "fetchBoardComments"> | undefined;
  writer: string;
  password: string;
  contents: string;
  onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentContents: ChangeEventHandler<HTMLTextAreaElement>;
  onClickCommentEdit: MouseEventHandler<HTMLButtonElement>;
  onClickCommentSignUP: MouseEventHandler<HTMLButtonElement>;
  onClickMoveToCommentEdit: MouseEventHandler<HTMLButtonElement>;
  onClickCommentDelete: MouseEventHandler<HTMLImageElement>;
  rating: number;
  onChangeRate: any;
  onLoadMore: () => void;
  isEdit: any;
  el?: IBoardComment;
}

export default function BoardCommentUI(props: IBoardCommentUIProps) {
  return (
    <div>
      <st.Footer>
        <st.Line></st.Line>

        <st.Wrapper>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.commentData?.fetchBoardComments.map((el) => (
              <st.Comment1 key={el._id}>
                <st.CommentColumn>
                  <st.CommentRow>
                    <st.WriterImage src="/Vector.png" />
                    <st.RatingContents>
                      <st.WriterRating>
                        <st.Comment1Writer>{el.writer}</st.Comment1Writer>
                        <st.Rating value={el.rating} disabled></st.Rating>
                      </st.WriterRating>
                      <st.Comment1Contents>{el.contents}</st.Comment1Contents>
                    </st.RatingContents>
                  </st.CommentRow>
                  <st.Comment1Date>{el.createdAt.slice(0, 10)}</st.Comment1Date>
                </st.CommentColumn>
                <st.CommentEdit onClick={props.onClickMoveToCommentEdit}>
                  수정하기
                </st.CommentEdit>
                <st.CommentDelete
                  src="/x.png"
                  onClick={props.onClickCommentDelete}
                  id={el._id}
                />
              </st.Comment1>
            ))}
          </InfiniteScroll>
        </st.Wrapper>

        <st.Line></st.Line>
      </st.Footer>
    </div>
  );
}
