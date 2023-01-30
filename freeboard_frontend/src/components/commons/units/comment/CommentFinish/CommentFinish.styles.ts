import styled from "@emotion/styled";
import { Rate } from "antd";
export const Footer = styled.div`
  width: 1200px;
  margin-left: 150px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-bottom: 500px;
`;
export const WriterImage = styled.img`
  margin-right: 15px;
  width: 40px;
  height: 40px;
`;
export const Star = styled(Rate)``;
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
export const Comment1Date = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`;
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
