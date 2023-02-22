import styled from "@emotion/styled";
import { head } from "lodash";
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
  width: 19%;
  height: 240px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 20px;
  margin: auto;
`;
export const BoardBodyId = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const MarketBodyImage = styled.img`
  width: 150px;
  height: 110px;
`;
export const BoardBodyTitle = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const BoardBodyDate = styled.div`
  font-size: 14px;
  color: #9b9b9b;
`;
export const SearchInput = styled.div``;
export const Search = styled.input`
  width: 250px;
  height: 30px;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
