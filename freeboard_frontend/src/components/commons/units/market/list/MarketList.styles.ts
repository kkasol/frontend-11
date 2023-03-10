import styled from "@emotion/styled";
export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BoardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin-top: 30px;
  width: 100%;
`;
export const BoardBody = styled.div`
  width: 17%;
  height: 240px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid #555555;

  margin: 10px;
  cursor: pointer;
`;
export const BoardBodyId = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const MarketBodyImage = styled.img`
  width: 100%;
  height: 150px;
`;
export const BoardBodyPrice = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const BoardBodyDate = styled.div`
  font-size: 14px;
  color: #9b9b9b;
  margin-top: 18px;
`;
export const MarketRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const MarketColumn = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;

  margin-right: 45px;
`;
export const SearchInput = styled.div``;
export const Search = styled.input`
  width: 250px;
  height: 30px;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
