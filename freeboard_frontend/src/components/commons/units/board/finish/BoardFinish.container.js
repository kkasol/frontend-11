import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "./BoardFinish.query";
import BoardFinishUI from "./BoardFinish.presenter";

export default function BoardFinish() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });
  // console.log(data.fetchBoard.createdAt);
  // function dataCut() {
  //   const dataCreated = data.fetchBoard.createdAt;
  //   console.log(dataCreated);
  // }
  return (
    <BoardFinishUI
      writer={data?.fetchBoard.writer}
      createdAt={data?.fetchBoard.createdAt}
      title={data?.fetchBoard.title}
      contents={data?.fetchBoard.contents}
      likeCount={data?.fetchBoard.likeCount}
      dislikeCount={data?.fetchBoard.dislikeCount}
    />
  );
}
