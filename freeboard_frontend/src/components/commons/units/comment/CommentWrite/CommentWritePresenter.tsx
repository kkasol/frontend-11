import * as st from "./CommentWriteStyles";
import { ChangeEvent } from "react";
import { IBoardComment } from "../../../../../commons/types/generated/types";
import { Dispatch, SetStateAction } from "react";

export interface IBoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCommentSubmit: () => void;
  onClickCommentUpdate: () => void;
  writer: string;
  password: string;
  contents: string;
  setStar: Dispatch<SetStateAction<number>>;
  isEdit?: boolean;
  el?: IBoardComment;
}

export default function BoardCommentWriteUI(
  props: IBoardCommentWriteUIProps
): JSX.Element {
  return (
    <st.CommentWrapper>
      {props.isEdit === false && (
        <>
          <st.CommentIcon src="/comment.png"></st.CommentIcon>
          <div>댓글</div>
        </>
      )}
      <st.CommentInfo>
        <st.CommentWriter
          placeholder="작성자"
          onChange={props.onChangeWriter}
          value={props.writer !== "" ? props.writer : props.el?.writer ?? ""}
          readOnly={props.isEdit}
        ></st.CommentWriter>
        <st.CommentPassword
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
          value={props.password}
        ></st.CommentPassword>
        <st.Rating onChange={props.setStar} />
      </st.CommentInfo>
      <st.CommentContents
        maxLength={100}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 
      무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 
      이에 대한 민형사상 책임은 게시자에게 있습니다"
        onChange={props.onChangeContents}
        value={
          props.contents !== "" ? props.contents : props.el?.contents ?? ""
        }
      ></st.CommentContents>
      <st.CommentSignUp>
        <st.CountLength>
          {props.contents !== ""
            ? props.contents.length
            : props.el?.contents.length ?? 0}
          /100
        </st.CountLength>
        <st.SignUpBtn
          type="button"
          onClick={
            props.isEdit === true
              ? props.onClickCommentUpdate
              : props.onClickCommentSubmit
          }
        >
          등록하기
        </st.SignUpBtn>
      </st.CommentSignUp>
    </st.CommentWrapper>
  );
}
