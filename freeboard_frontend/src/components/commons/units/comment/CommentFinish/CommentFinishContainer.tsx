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
import { ChangeEvent, MouseEvent } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../src/commons/types/generated/types";

export default function BoardCommentFinish() {
  const router = useRouter();
  const [commentWriter, setCommentWriter] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  const [commentContents, setCommentContents] = useState("");
  const [rating, setRating] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

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

  const onLoadMore = () => {
    if (commentData === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(commentData?.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchBoardComments === undefined)
          return { fetchBoardComments: [...prev.fetchBoardComments] };

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };
  const onClickMoveToCommentEdit = () => {
    setIsEdit(true);
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
      rating={rating}
      onChangeRate={onChangeRate}
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeCommentContents={onChangeCommentContents}
      commentData={commentData}
      onClickMoveToCommentEdit={onClickMoveToCommentEdit}
      onClickCommentEdit={onClickCommentEdit}
      onClickCommentDelete={onClickCommentDelete}
      onLoadMore={onLoadMore}
      isEdit={isEdit}
    />
  );
}
