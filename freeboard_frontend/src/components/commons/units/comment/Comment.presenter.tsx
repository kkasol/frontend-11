import * as st from "./Comment.styles";
import { ChangeEvent, MouseEventHandler, ChangeEventHandler } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
interface IProps {
  commentData: Pick<IQuery, "fetchBoardComments"> | undefined;

  onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentContents: ChangeEventHandler<HTMLTextAreaElement>;

  onClickCommentSignUP: MouseEventHandler<HTMLButtonElement>;
  onClickCommentDelete: MouseEventHandler<HTMLImageElement>;
}

export default function BoardCommentUI(props: IProps) {
  return (
    <div>
      <st.Footer>
        <st.CommentTitle>
          <st.CommentIcon src="/comment.png"></st.CommentIcon>
          <div>댓글</div>
        </st.CommentTitle>
        <st.CommentInfo>
          <st.CommentWriter
            type="text"
            placeholder="작성자"
            onChange={props.onChangeCommentWriter}
          ></st.CommentWriter>
          <st.CommentPassword
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangeCommentPassword}
          ></st.CommentPassword>
          <st.CommentRating src="/Star.png"></st.CommentRating>
          <st.CommentRating src="/Star.png"></st.CommentRating>
          <st.CommentRating src="/Star.png"></st.CommentRating>
          <st.CommentRating src="/Star.png"></st.CommentRating>
          <st.CommentRating src="/Star.png"></st.CommentRating>
        </st.CommentInfo>
        <st.CommentContents
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 
            무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 
            이에 대한 민형사상 책임은 게시자에게 있습니다"
          onChange={props.onChangeCommentContents}
        ></st.CommentContents>
        <st.CommentSignUp>
          <st.CountLength>1/100</st.CountLength>
          <st.SignUpBtn type="button" onClick={props.onClickCommentSignUP}>
            등록하기
          </st.SignUpBtn>
        </st.CommentSignUp>
        <st.Line></st.Line>
        {props.commentData?.fetchBoardComments.map((el) => (
          <st.Comment1 key={el._id}>
            <st.CommentColumn>
              <st.CommentRow>
                <st.WriterImage src="/Vector.png" />
                <st.RatingContents>
                  <st.WriterRating>
                    <st.Comment1Writer>{el.writer}</st.Comment1Writer>
                    <st.CommentRating src="/Star.png"></st.CommentRating>
                    <st.CommentRating src="/Star.png"></st.CommentRating>
                    <st.CommentRating src="/Star.png"></st.CommentRating>
                    <st.CommentRating src="/Star.png"></st.CommentRating>
                    <st.CommentRating src="/Star.png"></st.CommentRating>
                  </st.WriterRating>
                  <st.Comment1Contents>{el.contents}</st.Comment1Contents>
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
