import BoardFinish from "./BoardFinish.container";
import * as st from "./BoardFinish.styles";

export default function BoardFinishUI(props) {
  return (
    <div>
      <st.Total>
        <st.Wrapper>
          <st.Header>
            <st.WriterImage src="/Vector.png"></st.WriterImage>
            <st.WriteDate>
              <st.Writer>{props.writer}</st.Writer>
              <st.CreateDate>date: {props.createdAt}</st.CreateDate>
            </st.WriteDate>
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
          <st.ToIndex input type="button">
            목록으로
          </st.ToIndex>
          <st.ToChange input type="button">
            수정하기
          </st.ToChange>
          <st.ToDelete input type="button">
            삭제하기
          </st.ToDelete>
        </st.MiddleButton>
        <st.Line></st.Line>
        <st.Footer>
          <st.CommentTitle>
            <st.CommentIcon src="/comment.png"></st.CommentIcon>
            <div>댓글</div>
          </st.CommentTitle>
          <st.CommentInfo>
            <st.CommentWriter
              input
              type="text"
              placeholder="작성자"
            ></st.CommentWriter>
            <st.CommentPassword
              input
              type="password"
              placeholder="비밀번호"
            ></st.CommentPassword>
            <st.CommentRating src="/Star.png"></st.CommentRating>
            <st.CommentRating src="/Star.png"></st.CommentRating>
            <st.CommentRating src="/Star.png"></st.CommentRating>
            <st.CommentRating src="/Star.png"></st.CommentRating>
            <st.CommentRating src="/Star.png"></st.CommentRating>
          </st.CommentInfo>
          <st.CommentContents
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 
            무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 
            이에 대한 민형사상 책임은 게시자에게 있습니다"
          ></st.CommentContents>
          <st.CommentSignUp>
            <st.CountLength>1/100</st.CountLength>
            <st.SignUpBtn input type="button">
              등록하기
            </st.SignUpBtn>
          </st.CommentSignUp>
          <st.Line></st.Line>
          <st.Comment1>
            <st.WriterImage src="/Vector.png"></st.WriterImage>
            <st.CommentColumn>
              <st.WriterRating>
                <st.Comment1Writer>철수</st.Comment1Writer>

                <st.CommentRating src="/Star.png"></st.CommentRating>
                <st.CommentRating src="/Star.png"></st.CommentRating>
                <st.CommentRating src="/Star.png"></st.CommentRating>
                <st.CommentRating src="/Star.png"></st.CommentRating>
                <st.CommentRating src="/Star.png"></st.CommentRating>
              </st.WriterRating>
              <st.Comment1Contents>좋아요</st.Comment1Contents>
              <st.Comment1Date>2023.01.10</st.Comment1Date>
            </st.CommentColumn>
          </st.Comment1>
          <st.Line></st.Line>
          <st.Comment2>
            <st.WriterImage src="/Vector.png"></st.WriterImage>
            <st.CommentColumn>
              <st.WriterRating>
                <st.Comment2Writer>영희</st.Comment2Writer>

                <st.CommentRating src="/Star.png"></st.CommentRating>
                <st.CommentRating src="/Star.png"></st.CommentRating>
                <st.CommentRating src="/Star.png"></st.CommentRating>
                <st.CommentRating src="/Star.png"></st.CommentRating>
                <st.CommentRating src="/Star.png"></st.CommentRating>
              </st.WriterRating>
              <st.Comment2Contents>싫어요</st.Comment2Contents>
              <st.Comment2Date>2023.01.10</st.Comment2Date>
            </st.CommentColumn>
          </st.Comment2>
          <st.Line></st.Line>
          <st.Comment3>
            <st.WriterImage src="/Vector.png"></st.WriterImage>
            <st.CommentColumn>
              <st.WriterRating>
                <st.Comment3Writer>민수</st.Comment3Writer>

                <st.CommentRating src="/Star.png"></st.CommentRating>
                <st.CommentRating src="/Star.png"></st.CommentRating>
                <st.CommentRating src="/Star.png"></st.CommentRating>
                <st.CommentRating src="/Star.png"></st.CommentRating>
                <st.CommentRating src="/Star.png"></st.CommentRating>
              </st.WriterRating>
              <st.Comment3Contents>그냥그래요</st.Comment3Contents>
              <st.Comment3Date>2023.01.10</st.Comment3Date>
            </st.CommentColumn>
          </st.Comment3>
          <st.Line></st.Line>
        </st.Footer>
      </st.Total>
    </div>
  );
}
