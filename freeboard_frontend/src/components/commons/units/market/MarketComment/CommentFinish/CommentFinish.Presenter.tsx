import InfiniteScroll from "react-infinite-scroller";
import { IQuery } from "../../../../../../commons/types/generated/types";
import CommentFinishUIItem from "./CommentFinish.presenterItem";
export interface ICommentFinishUIProps {
  data?: Pick<IQuery, "fetchUseditemQuestions">;
  onLoadMore: () => void;
}

export default function CommentFinishUI(
  props: ICommentFinishUIProps
): JSX.Element {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={props.onLoadMore}
      hasMore={true}
      useWindow={false}
    >
      <>
        {props.data?.fetchUseditemQuestions.map((el) => (
          <CommentFinishUIItem key={el._id} el={el} />
        )) ?? <></>}
      </>
    </InfiniteScroll>
  );
}
