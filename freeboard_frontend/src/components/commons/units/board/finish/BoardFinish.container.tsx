import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardFinish.query";
import BoardFinishUI from "./BoardFinish.presenter";
import BoardComment from "../../comment/Comment.container";
// import { useState } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../../commons/types/generated/types";

export default function BoardFinish() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: `${router.query.id}`,
      },
    }
  );

  const dataCut = data?.fetchBoard.createdAt.slice(0, 10);

  const onClickToList = () => {
    router.push(`/boards/`);
  };
  const onClickEdit = () => {
    router.push(`/boards/${router.query.id}/edit`);
  };

  const onClickDelete = () => {
    deleteBoard({
      variables: { boardId: router.query.id },
    });
    router.push(`/boards/`);
  };
  return (
    <>
      <BoardFinishUI
        writer={data?.fetchBoard.writer}
        createdAt={dataCut}
        title={data?.fetchBoard.title}
        contents={data?.fetchBoard.contents}
        likeCount={data?.fetchBoard.likeCount}
        dislikeCount={data?.fetchBoard.dislikeCount}
        onClickDelete={onClickDelete}
        onClickToList={onClickToList}
        onClickEdit={onClickEdit}
      />
      <BoardComment />
    </>
  );
}
