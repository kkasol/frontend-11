import MarketDetail from "../../../src/components/commons/units/market/Detail/MarketDetail.index";
import MarketCommentFinish from "../../../src/components/commons/units/market/MarketComment/CommentFinish/CommentFinish.Container";
import MarketCommentWrite from "../../../src/components/commons/units/market/MarketComment/CommentWrite/CommentWriteContainer";

export default function MarketDetailPage() {
  return (
    <>
      <MarketDetail />
      <MarketCommentWrite />
      <MarketCommentFinish />
    </>
  );
}
