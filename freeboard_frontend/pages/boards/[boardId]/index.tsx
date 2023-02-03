import BoardFinish from "../../../src/components/commons/units/board/finish/BoardFinish.container";
import BoardCommentWrite from "../../../src/components/commons/units/comment/CommentWrite/CommentWriteContainer";
import CommentFinish from "../../../src/components/commons/units/comment/CommentFinish/CommentFinishContainer";
export default function BoardFinishPage(): JSX.Element {
  return (
    <>
      <BoardFinish />;
      <BoardCommentWrite />
      <CommentFinish />;
    </>
  );
}
