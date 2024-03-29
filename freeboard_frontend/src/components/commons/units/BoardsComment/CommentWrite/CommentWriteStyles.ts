import styled from "@emotion/styled";
import { Rate } from "antd";

export const CommentWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
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
  height: 25px;
  width: 25px;
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
  font-size: 20px;
  padding-left: 10px;
`;
export const WriterImage = styled.img`
  margin-right: 15px;
  width: 40px;
  height: 40px;
`;

export const CommentPassword = styled.input`
  width: 180px;
  height: 52px;
  font-size: 20px;
  padding-left: 10px;
`;
export const CommentRating = styled.img`
  margin-left: 7px;
  width: 20px;
  height: 20px;
`;
export const CommentContents = styled.textarea`
  width: 100%;
  height: 180px;
  font-size: 20px;
  resize: none;
  border: 1px solid #bdbdbd;
  padding: 10px;
`;
export const CommentSignUp = styled.div`
  width: 1195px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #bdbdbd;
  border-top: none;
  align-items: center;
  margin-bottom: 40px;
`;
export const CountLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
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
export const Wrapper = styled.div`
  height: 800px;
  width: 100%;
  overflow: auto;
`;

export const Comment1 = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CommentColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CommentRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export const WriterRating = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Comment1Writer = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
export const RatingContents = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Comment1Contents = styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 16px;
`;
export const Rating = styled(Rate)`
  margin-left: 15px;
`;
export const Comment1Date = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`;
export const CommentEdit = styled.button``;
export const CommentDelete = styled.img`
  :hover {
    cursor: pointer;
  }
  width: 15px;
  height: 15px;
  margin-right: 15px;
`;

export const Line = styled.div`
  border-top: 1px solid #bdbdbd;
  margin: 20px 0px 20px 0px;
`;
