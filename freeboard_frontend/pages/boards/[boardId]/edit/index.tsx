import BoardWrite from "../../../../src/components/commons/units/board/write/BoardWrite.container";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      images
    }
  }
`;
export default function BoardPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  return <BoardWrite isEdit={true} data={data} />;
}
