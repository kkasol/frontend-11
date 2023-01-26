import * as st from "./BoardFinish.styles";
import { ChangeEvent, MouseEventHandler, ChangeEventHandler } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";
interface IProps {
  el: any;
  commentData: Pick<IQuery, "fetchBoardComments"> | undefined;
  writer: string;
  createdAt: string;
  title: string;
  contents: string;
  likeCount: any;
  dislikeCount: any;
  onClickToList: MouseEventHandler<HTMLButtonElement>;
  onClickEdit: MouseEventHandler<HTMLButtonElement>;
  onClickDelete: MouseEventHandler<HTMLButtonElement>;
  onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentContents: ChangeEventHandler<HTMLTextAreaElement>;

  onClickCommentSignUP: MouseEventHandler<HTMLButtonElement>;
  onClickCommentDelete: MouseEventHandler<HTMLButtonElement>;
}
export default function BoardFinishUI(props: IProps) {
  return (
    <div>
      <st.Total>
        <st.Wrapper>
          <st.Header>
            <st.ImageDate>
              <st.WriterImage src="/Vector.png"></st.WriterImage>
              <st.WriteDate>
                <st.Writer>{props.writer}</st.Writer>
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
            <st.ContentsTitle>{props.title}</st.ContentsTitle>
            <st.ContentsBody>
              <st.ContentsImage src="/image.png">
                {/* {data?.fetchBoard.image} */}
              </st.ContentsImage>
              <st.ContentsText>{props.contents}</st.ContentsText>
              <st.ContentsYoutube src="/video.png">
                {/* {data?.fetchBoard.youtubeUrl} */}
              </st.ContentsYoutube>
            </st.ContentsBody>
            <st.LikeDislike>
              <st.Like>
                <st.LikeIcon src="/like.png"></st.LikeIcon>
                <div>{props.likeCount}</div>
              </st.Like>
              <st.Dislike>
                <st.DislikeIcon src="/dislike.png"></st.DislikeIcon>
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
