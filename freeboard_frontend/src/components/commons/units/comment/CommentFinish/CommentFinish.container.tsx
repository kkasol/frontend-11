import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./CommentFinish.query";
import BoardCommentFinishUI from "./CommentFinish.presenter";
import { ChangeEvent, MouseEvent } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";

export default function BoardComment() {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;
  const [boardCommentId, setBoardCommentId] = useState("");
  const [password, setPassword] = useState("");

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.id },
  });

  const onLoadMore = () => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10 / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            FetchBoardComments: [...prev.fetchBoardComments],
          };
        }
        return {
          fetchBoards: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  const onClickCommentDelete = (event: MouseEvent<HTMLImageElement>) => {
    const password = prompt("비밀번호를 입력하세요");
    try {
      deleteBoardComment({
        variables: {
          boardCommentId,
          password,
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
  const onChangeDeletePassword = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  return (
    <BoardCommentFinishUI
      data={data}
      onClickCommentDelete={onClickCommentDelete}
      onLoadMore={onLoadMore}
    />
  );
}
