import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Total = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;
export const ImageDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const WriterImage = styled.img`
  margin-right: 15px;
  width: 40px;
  height: 40px;
`;
export const WriteDate = styled.div`
  display: flex;
  flex-direction: column;
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
  justify-content: center;
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
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 30px;
  text-align: center;
`;
export const ContentsText = styled.div`
  height: 100%;
  margin-bottom: 30px;
  margin-top: 20px;
`;
export const ContentsYoutube = styled.div`
  width: 486px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 150px;
`;
export const Youtube = styled(ReactPlayer)`
  margin: auto;
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
export const LikeIcon = styled.img`
  :hover {
    cursor: pointer;
  }
`;
export const Like = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffd600;
  margin-right: 50px;
  font-size: 18px;
`;
export const DislikeIcon = styled.img`
  :hover {
    cursor: pointer;
  }
`;
export const Dislike = styled.div`
  display: flex;
  flex-direction: column;
  color: #828282;
  font-size: 18px;
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

export const YouTube = styled.div``;
