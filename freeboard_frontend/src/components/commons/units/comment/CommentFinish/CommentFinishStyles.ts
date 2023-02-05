import styled from "@emotion/styled";
import { Rate, Modal } from "antd";
export const Wrapper = styled.div`
  height: 150px;
  width: 1200px;
  overflow: auto;
`;
export const WriterImage = styled.img`
  margin-right: 15px;
  width: 40px;
  height: 40px;
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
export const CommentWriter = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
export const RatingContents = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CommentContents = styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 16px;
`;
export const Rating = styled(Rate)`
  margin-left: 15px;
`;
export const CommentDate = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`;
export const CommentEdit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const CommentUpdate = styled.img`
  :hover {
    cursor: pointer;
  }
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;

export const CommentDelete = styled.img`
  :hover {
    cursor: pointer;
  }
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;

export const Line = styled.div`
  border-top: 1px solid #bdbdbd;
  margin: 20px 0px 20px 0px;
`;

export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
