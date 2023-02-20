import { useMutation } from "@apollo/client";
import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IBoardComment,
} from "../../../../../../commons/types/generated/types";

import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./CommentFinishQueries";
import * as st from "./CommentFinishStyles";
import { useRouter } from "next/router";
import BoardCommentWrite from "../CommentWrite/CommentWriteContainer";
export interface IMarketCommentFinishUIItemProps {
  el: IBoardComment;
}

export default function ICommentFinishUIItem(
  props: IMarketCommentFinishUIItemProps
): JSX.Element {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickUpdate = (): void => {
    setIsEdit(true);
  };

  const onClickDelete = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      await deleteMarketComment({
        variables: {
          password,
          boardCommentId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickOpenDeleteModal = (
    event: MouseEvent<HTMLImageElement>
  ): void => {
    setIsOpenDeleteModal(true);
  };

  const onChangeDeletePassword = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  return (
    <>
      {isOpenDeleteModal && (
        <st.PasswordModal visible={true} onOk={onClickDelete}>
          <div>비밀번호 입력: </div>
          <st.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </st.PasswordModal>
      )}
      {!isEdit ? (
        <st.Wrapper>
          <st.Comment1 key={props.el._id}>
            <st.CommentColumn>
              <st.CommentRow>
                <st.WriterImage src="/Vector.png" />
                <st.RatingContents>
                  <st.WriterRating>
                    <st.CommentWriter>{props.el.writer}</st.CommentWriter>
                    <st.Rating value={props.el.rating} disabled></st.Rating>
                  </st.WriterRating>
                  <st.CommentContents>{props.el.contents}</st.CommentContents>
                </st.RatingContents>
              </st.CommentRow>
              <st.CommentDate>{props.el.createdAt.slice(0, 10)}</st.CommentDate>
            </st.CommentColumn>
            <st.CommentEdit>
              <st.CommentUpdate
                src="/edit.png"
                onClick={onClickUpdate}
              ></st.CommentUpdate>
              <st.CommentDelete
                src="/x.png"
                onClick={onClickOpenDeleteModal}
                id={props.el._id}
              />
            </st.CommentEdit>
          </st.Comment1>
          <st.Line />
        </st.Wrapper>
      ) : (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
