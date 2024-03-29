import * as st from "./CommentWriteStyles";
import { ChangeEvent } from "react";
import { IBoardComment } from "../../../../../../commons/types/generated/types";

export interface IBoardCommentWriteUIProps {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCommentSubmit: () => void;
  onClickCommentUpdate: (event) => (useditemQuestionId) => void;

  contents: string;
  isEdit?: boolean;
  el?: IBoardComment;
}

export default function BoardCommentWriteUI(
  props: IBoardCommentWriteUIProps
): JSX.Element {
  return (
    <>
      <st.CommentWrapper>
        {props.isEdit === false && <></>}
        <st.CommentTitle>
          <st.CommentIcon src="/comment.png"></st.CommentIcon>
          <span>댓글</span>
        </st.CommentTitle>

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
    </>
  );
}
