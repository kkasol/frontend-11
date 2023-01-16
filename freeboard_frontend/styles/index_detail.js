import styled from "@emotion/styled";
export const Total = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  margin: 150px 0px 0px 150px;
`;
export const Wrapper = styled.div`
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 90px;
  margin-bottom: 70px;
  box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  justify-content: space-between;
`;
export const WriterImage = styled.img`
  margin-right: 15px;
  width: 40px;
  height: 40px;
`;
export const WriteDate = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -640px;
`;
export const Writer = styled.div`
  font-size: 24px;
  font-weight: 500;
`;
export const CreateDate = styled.div`
  font-size: 16px;
  color: #828282;
`;
export const ShareIcon = styled.div``;
export const Share = styled.img`
  margin-right: 30px;
`;
export const Navigation = styled.img``;
export const Line = styled.div`
  border-top: 1px solid #bdbdbd;
  margin: 20px 0px 20px 0px;
`;
export const Contents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-contents: center;
`;
export const ContentsTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
`;
export const ContentsBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContentsImage = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center:
  align-items: center;
  margin-bottom: 30px;
  margin-top: 30px;
  text-align: center;
`;
export const ContentsText = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
  margin-top: 20px;
`;
export const ContentsYoutube = styled.img`
  width: 486px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center:
  align-items: center;
  text-align: center;
  margin-top: 150px;
  `;
export const LikeDislike = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`;
export const LikeIcon = styled.img``;
export const Like = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffd600;
  margin-right: 50px;
`;
export const DislikeIcon = styled.img``;
export const Dislike = styled.div`
  display: flex;
  flex-direction: column;
  color: #828282;
`;
export const MiddleButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
`;
export const ToIndex = styled.button`
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: gray;
  }
  background-color: white;
  border: 1px solid #bdbdbd;
  width: 179px;
  height: 45px;
  margin-right: 25px;
  font-size: 16px;
  font-weight: 500;
`;
export const ToChange = styled.button`
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: gray;
  }
  background-color: white;
  border: 1px solid #bdbdbd;
  width: 179px;
  height: 45px;
  margin-right: 25px;
  font-size: 16px;
  font-weight: 500;
`;
export const ToDelete = styled.button`
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: gray;
  }
  background-color: white;
  border: 1px solid #bdbdbd;
  width: 179px;
  height: 45px;
  margin-right: 25px;
  font-size: 16px;
  font-weight: 500;
`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-bottom: 500px;
`;
export const CommentTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CommentIcon = styled.img`
  margin-right: 10px;
`;
export const CommentInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;
export const CommentWriter = styled.input`
  width: 180px;
  height: 52px;
  margin-right: 20px;
  font-size: 16px;
  padding-left: 10px;
`;
export const CommentPassword = styled.input`
  width: 180px;
  height: 52px;
  font-size: 16px;
  padding-left: 10px;
`;
export const CommentRating = styled.img`
  margin-left: 7px;
  width: 20px;
  height: 20px;
`;
export const CommentContents = styled.textarea`
  width: 100%;
  height: 161px;
  font-size: 16px;
  resize: none;
  border: 1px solid #bdbdbd;
`;
export const CommentSignUp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #bdbdbd;
  border-top: none;
  align-items: center;
  margin-bottom: 40px;
`;
export const CountLength = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
  margin-left: 10px;
`;
export const SignUpBtn = styled.button`
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: gray;
  }
  width: 7%;
  height: 55px;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 500;
  margin-right: -7px;
`;
export const Comment1 = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
`;
export const CommentColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WriterRating = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Comment1Writer = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
export const Comment1Contents = styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 16px;
`;
export const Comment1Date = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`;

export const Comment2 = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
`;
export const Comment2Writer = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
export const Comment2Contents = styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 16px;
`;
export const Comment2Date = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`;
export const Comment3 = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
`;
export const Comment3Writer = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
export const Comment3Contents = styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 16px;
`;
export const Comment3Date = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`;
