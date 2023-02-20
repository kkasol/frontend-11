import BoardFinish from "../../../src/components/commons/units/board/finish/BoardFinish.container";
import BoardCommentWrite from "../../../src/components/commons/units/BoardsComment/CommentWrite/CommentWriteContainer";
import CommentFinish from "../../../src/components/commons/units/BoardsComment/CommentFinish/CommentFinishContainer";
export default function BoardFinishPage(): JSX.Element {
  return (
    <>
      <BoardFinish />;
      <BoardCommentWrite />
      <CommentFinish />;
    </>
  );
}
