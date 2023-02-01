import * as st from "./Comment.styles";
import { ChangeEvent, MouseEventHandler, ChangeEventHandler } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { Rate } from "antd";
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
        <st.CommentTitle>
          <st.CommentIcon src="/comment.png"></st.CommentIcon>
          <div>댓글</div>
        </st.CommentTitle>
        <st.CommentInfo>
          <st.CommentWriter
            placeholder="작성자"
            onChange={props.onChangeCommentWriter}
            value={props.writer !== "" ? props.writer : props.el?.writer ?? ""}
            readOnly={props.isEdit}
          ></st.CommentWriter>
          <st.CommentPassword
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangeCommentPassword}
            value={props.password}
          ></st.CommentPassword>
          <Rate onChange={props.onChangeRate} value={props.rating} />
        </st.CommentInfo>
        <st.CommentContents
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 
            무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 
            이에 대한 민형사상 책임은 게시자에게 있습니다"
          onChange={props.onChangeCommentContents}
          value={
            props.contents !== "" ? props.contents : props.el?.contents ?? ""
          }
        ></st.CommentContents>
        <st.CommentSignUp>
          <st.CountLength>1/100</st.CountLength>
          <st.SignUpBtn
            type="button"
            onClick={
              props.isEdit === true
                ? props.onClickCommentEdit
                : props.onClickCommentSignUP
            }
          >
            등록하기
          </st.SignUpBtn>
        </st.CommentSignUp>
        <st.Line></st.Line>
      </st.Footer>
    </div>
  );
}
