import styled from "@emotion/styled";
export const Wrapper = styled.div`
  width: 1200px;
`;
export const BoardList = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  text-align: center;
`;
export const BoardHeader = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
`;
export const BoardHeaderId = styled.div`
  width: 7%;
`;

export const BoardHeaderTitle = styled.div`
  width: 53%;
`;
export const BoardHeaderWriter = styled.div`
  width: 20%;
`;
export const BoardHeaderDate = styled.div`
  width: 20%;
`;

export const BoardBody = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-top: 1px solid #bdbdbd;
`;
export const BoardBodyId = styled.div`
  width: 7%;
`;
export const BoardBodyTitle = styled.div`
  :hover {
    cursor: pointer;
  }
  width: 53%;
`;
export const BoardBodyWriter = styled.div`
  width: 20%;
`;
export const BoardBodyDate = styled.div`
  width: 20%;
`;
