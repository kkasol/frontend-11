import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  FETCH_BOARD_COMMENTS,
  CREATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./Comment.query";
import BoardCommentUI from "./Comment.presenter";
import { ChangeEvent } from "react";
import {
  IMutation,
  IMutationUpdateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../src/commons/types/generated/types";

export default function BoardCommentWrite() {
  const router = useRouter();
  const [commentWriter, setCommentWriter] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  const [commentContents, setCommentContents] = useState("");
  const [rating, setRating] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const { data: commentData, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: `${router.query.id}`,
    },
  });
  const onChangeRate = (event: ChangeEvent<HTMLElement>) => {
    setRating(event);
  };
  function onChangeCommentWriter(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setCommentWriter(value);
  }

  function onChangeCommentPassword(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setCommentPassword(value);
  }

  function onChangeCommentContents(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value;
    setCommentContents(value);
  }
  const onClickCommentSignUP = async () => {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: commentWriter,
            password: commentPassword,
            contents: commentContents,
            rating,
          },
          boardId: router.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.id },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickCommentEdit = async (): Promise<void> => {
    if (commentContents === "") {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (commentPassword === "") {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password: commentPassword,
          boardCommentId: commentData?.fetchBoardComments._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardCommentUI
      rating={rating}
      onChangeRate={onChangeRate}
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeCommentContents={onChangeCommentContents}
      onClickCommentSignUP={onClickCommentSignUP}
      commentData={commentData}
      onClickCommentEdit={onClickCommentEdit}
      isEdit={isEdit}
    />
  );
}
