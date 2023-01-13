import {
  Total,
  Wrapper,
  Header,
  WriterImage,
  Writer,
  WriteDate,
  CreateDate,
  ShareIcon,
  Share,
  Navigation,
  Line,
  Contents,
  ContentsTitle,
  ContentsBody,
  ContentsImage,
  ContentsText,
  ContentsYoutube,
  LikeIcon,
  Like,
  DislikeIcon,
  Dislike,
  LikeDislike,
  MiddleButton,
  ToIndex,
  ToChange,
  ToDelete,
  Footer,
  CommentTitle,
  CommentIcon,
  CommentInfo,
  CommentWriter,
  CommentPassword,
  CommentRating,
  CommentContents,
  CommentSignUp,
  CountLength,
  SignUpBtn,
  Comment1,
  CommentColumn,
  Comment1Writer,
  WriterRating,
  Comment1Contents,
  Comment1Date,
  Comment2,
  Comment2Writer,
  Comment2Contents,
  Comment2Date,
  Comment3,
  Comment3Writer,
  Comment3Contents,
  Comment3Date,
} from "../../../styles/index_detail";

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
      updatedAt
      deletedAt
      likeCount
      dislikeCount
      images
      youtubeUrl
    }
  }
`;

export default function DetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  return (
    <div>
      <Total>
        <Wrapper>
          <Header>
            <WriterImage src="/Vector.png"></WriterImage>
            <WriteDate>
              <Writer>{data?.fetchBoard.writer}</Writer>
              <CreateDate>{data?.fetchBoard.createdAt}</CreateDate>
            </WriteDate>
            <ShareIcon>
              <Share src="/share.png"></Share>
              <Navigation src="/address.png"></Navigation>
            </ShareIcon>
          </Header>
          <Line></Line>
          <Contents>
            <ContentsTitle>{data?.fetchBoard.title}</ContentsTitle>
            <ContentsBody>
              <ContentsImage src="/image.png">
                {/* {data?.fetchBoard.image} */}
              </ContentsImage>
              <ContentsText>{data?.fetchBoard.contents}</ContentsText>
              <ContentsYoutube src="/video.png">
                {/* {data?.fetchBoard.youtubeUrl} */}
              </ContentsYoutube>
            </ContentsBody>
            <LikeDislike>
              <Like>
                <LikeIcon src="/like.png"></LikeIcon>
                <div>{data?.fetchBoard.likeCount}</div>
              </Like>
              <Dislike>
                <DislikeIcon src="/dislike.png"></DislikeIcon>
                <div>{data?.fetchBoard.dislikeCount}</div>
              </Dislike>
            </LikeDislike>
          </Contents>
        </Wrapper>
        <MiddleButton>
          <ToIndex input type="button">
            목록으로
          </ToIndex>
          <ToChange input type="button">
            수정하기
          </ToChange>
          <ToDelete input type="button">
            삭제하기
          </ToDelete>
        </MiddleButton>
        <Line></Line>
        <Footer>
          <CommentTitle>
            <CommentIcon src="/comment.png"></CommentIcon>
            <div>댓글</div>
          </CommentTitle>
          <CommentInfo>
            <CommentWriter
              input
              type="text"
              placeholder="작성자"
            ></CommentWriter>
            <CommentPassword
              input
              type="password"
              placeholder="비밀번호"
            ></CommentPassword>
            <CommentRating src="/Star.png"></CommentRating>
            <CommentRating src="/Star.png"></CommentRating>
            <CommentRating src="/Star.png"></CommentRating>
            <CommentRating src="/Star.png"></CommentRating>
            <CommentRating src="/Star.png"></CommentRating>
          </CommentInfo>
          <CommentContents
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 
          무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 
          이에 대한 민형사상 책임은 게시자에게 있습니다"
          ></CommentContents>
          <CommentSignUp>
            <CountLength>1/100</CountLength>
            <SignUpBtn input type="button">
              등록하기
            </SignUpBtn>
          </CommentSignUp>
          <Line></Line>
          <Comment1>
            <WriterImage src="/Vector.png"></WriterImage>
            <CommentColumn>
              <WriterRating>
                <Comment1Writer>철수</Comment1Writer>

                <CommentRating src="/Star.png"></CommentRating>
                <CommentRating src="/Star.png"></CommentRating>
                <CommentRating src="/Star.png"></CommentRating>
                <CommentRating src="/Star.png"></CommentRating>
                <CommentRating src="/Star.png"></CommentRating>
              </WriterRating>
              <Comment1Contents>좋아요</Comment1Contents>
              <Comment1Date>2023.01.10</Comment1Date>
            </CommentColumn>
          </Comment1>
          <Line></Line>
          <Comment2>
            <WriterImage src="/Vector.png"></WriterImage>
            <CommentColumn>
              <WriterRating>
                <Comment2Writer>영희</Comment2Writer>

                <CommentRating src="/Star.png"></CommentRating>
                <CommentRating src="/Star.png"></CommentRating>
                <CommentRating src="/Star.png"></CommentRating>
                <CommentRating src="/Star.png"></CommentRating>
                <CommentRating src="/Star.png"></CommentRating>
              </WriterRating>
              <Comment2Contents>싫어요</Comment2Contents>
              <Comment2Date>2023.01.10</Comment2Date>
            </CommentColumn>
          </Comment2>
          <Line></Line>
          <Comment3>
            <WriterImage src="/Vector.png"></WriterImage>
            <CommentColumn>
              <WriterRating>
                <Comment3Writer>민수</Comment3Writer>

                <CommentRating src="/Star.png"></CommentRating>
                <CommentRating src="/Star.png"></CommentRating>
                <CommentRating src="/Star.png"></CommentRating>
                <CommentRating src="/Star.png"></CommentRating>
                <CommentRating src="/Star.png"></CommentRating>
              </WriterRating>
              <Comment3Contents>그냥그래요</Comment3Contents>
              <Comment3Date>2023.01.10</Comment3Date>
            </CommentColumn>
          </Comment3>
          <Line></Line>
        </Footer>
      </Total>
    </div>
  );
}
