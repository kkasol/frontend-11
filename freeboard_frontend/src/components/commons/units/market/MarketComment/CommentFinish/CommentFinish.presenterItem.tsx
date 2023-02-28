import { useMutation } from "@apollo/client";
import { useState } from "react";
import type { MouseEvent } from "react";
import type {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../../../commons/types/generated/types";

import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./CommentFinishQueries";
import * as st from "./CommentFinishStyles";
import { useRouter } from "next/router";
import BoardCommentWrite from "../CommentWrite/CommentWriteContainer";
import { IUseditemQuestion } from "../../../../../../../src/commons/types/generated/types";
export interface IMarketCommentFinishUIItemProps {
  el: IUseditemQuestion;
}

export default function CommentFinishUIItem(
  props: IMarketCommentFinishUIItemProps
): JSX.Element {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);

  const onClickUpdate = (): void => {
    setIsEdit(true);
  };
  const onClickDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
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

  return (
    <>
      {!isEdit ? (
        <st.Wrapper>
          <st.Comment1 key={props.el._id}>
            <st.CommentColumn>
              <st.CommentRow>
                <st.WriterImage src="/Vector.png" />
                <st.RatingContents>
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
                onClick={onClickDelete}
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
