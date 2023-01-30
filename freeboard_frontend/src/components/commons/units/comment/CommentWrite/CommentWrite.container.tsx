import { useMutation, useQuery } from "@apollo/client";

import { useRouter } from "next/router";
import {
  FETCH_BOARD_COMMENTS,
  CREATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from "./CommentWrite.query";
import BoardCommentUI from "./CommentWrite.presenter";
import { ChangeEvent, useState, MouseEvent } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";

export default function BoardComment() {
  const router = useRouter();
  const [commentWriter, setCommentWriter] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  const [commentContents, setCommentContents] = useState("");
  const [star, setStar] = useState(0);

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const { data: commentData } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: `${router.query.id}`,
    },
  });

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
            rating: star,
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
    console.log(commentData);
  };
  const onClickCommentDelete = (event: MouseEvent<HTMLImageElement>) => {
    const password = prompt("비밀번호를 입력하세요");
    try {
      deleteBoardComment({
        variables: {
          boardCommentId: event.target.id,
          password: commentPassword,
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
  return (
    <BoardCommentUI
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeCommentContents={onChangeCommentContents}
      onClickCommentSignUP={onClickCommentSignUP}
      commentData={commentData}
      onClickCommentDelete={onClickCommentDelete}
      setStar={setStar}
      star={star}
    />
  );
}
