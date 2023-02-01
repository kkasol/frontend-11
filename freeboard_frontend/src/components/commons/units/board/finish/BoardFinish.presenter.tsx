import * as st from "./BoardFinish.styles";
import { MouseEventHandler } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";
interface IBoardFinishUIProps {
  data?: Pick<IQuery, "fetchBoard">;

  el: any;
  commentData: Pick<IQuery, "fetchBoardComments"> | undefined;
  writer?: string;
  createdAt: string;
  title?: string;
  contents?: string;
  likeCount: any;
  dislikeCount: any;
  onClickLike: () => void;
  onClickDislike: () => void;
  onClickToList: MouseEventHandler<HTMLButtonElement>;
  onClickEdit: MouseEventHandler<HTMLButtonElement>;
  onClickDelete: MouseEventHandler<HTMLButtonElement>;
  // data?: Pick<IQuery, "fetchBoard">;
}
export default function BoardFinishUI(props: IBoardFinishUIProps) {
  return (
    <div>
      <st.Total>
        <st.Wrapper>
          <st.Header>
            <st.ImageDate>
              <st.WriterImage src="/Vector.png"></st.WriterImage>
              <st.WriteDate>
                <st.Writer>{props.data?.fetchBoard?.writer}</st.Writer>
                <st.CreateDate>date: {props.createdAt}</st.CreateDate>
              </st.WriteDate>
            </st.ImageDate>
            <st.ShareIcon>
              <st.Share src="/share.png"></st.Share>
              <st.Navigation src="/address.png"></st.Navigation>
            </st.ShareIcon>
          </st.Header>
          <st.Line></st.Line>
          <st.Contents>
            <st.ContentsTitle>{props.data?.fetchBoard?.title}</st.ContentsTitle>
            <st.ContentsBody>
              <st.ContentsImage src="/image.png">
                {/* {data?.fetchBoard.image} */}
              </st.ContentsImage>
              <st.ContentsText>
                {props.data?.fetchBoard?.contents}
              </st.ContentsText>
              <st.ContentsYoutube>
                {props.data?.fetchBoard.youtubeUrl !== "" && (
                  <st.Youtube
                    url={props.data?.fetchBoard.youtubeUrl ?? ""}
                    width="486px"
                    height="240px"
                  />
                )}
              </st.ContentsYoutube>
            </st.ContentsBody>
            <st.LikeDislike>
              <st.Like>
                <st.LikeIcon
                  src="/like.png"
                  onClick={props.onClickLike}
                ></st.LikeIcon>
                <div>{props.likeCount}</div>
              </st.Like>
              <st.Dislike>
                <st.DislikeIcon
                  src="/dislike.png"
                  onClick={props.onClickDislike}
                ></st.DislikeIcon>
                <div>{props.dislikeCount}</div>
              </st.Dislike>
            </st.LikeDislike>
          </st.Contents>
        </st.Wrapper>
        <st.MiddleButton>
          <st.ToIndex onClick={props.onClickToList}>목록으로</st.ToIndex>
          <st.ToChange type="button" onClick={props.onClickEdit}>
            수정하기
          </st.ToChange>
          <st.ToDelete onClick={props.onClickDelete} type="button">
            삭제하기
          </st.ToDelete>
        </st.MiddleButton>
        <st.Line></st.Line>
      </st.Total>
    </div>
  );
}
