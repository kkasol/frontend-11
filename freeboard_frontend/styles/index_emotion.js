import styled from "@emotion/styled";
import { Button } from "antd";

export const Signup = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 80px;
`;

export const Writer = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-shadow: 0, 4, 0.25, black;
  margin-bottom: 15px;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  box-shadow: 0px 0px 10px gray;
  width: 1200px;
  height: 100%;
  padding: 50px;
`;
export const NamePassword = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Name = styled.div`
  width: 100%;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
`;
export const Password = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SignTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  margin-bottom: 15px;
  margin-top: 20px;
`;
export const NpInput = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 10px;
`;
export const MyInput = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 10px;
`;
export const MyInputBody = styled.textarea`
  width: 100%;
  height: 500px;
  border: 1px solid #bdbdbd;
  padding: 20px 20px 0px 20px;
  resize: none;
`;
export const Search = styled.button`
  :hover {
    cursor: pointer;
  }
  background-color: black;
  color: white;
  width: 124px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const MyInputMini = styled.input`
  width: 77px;
  margin-right: 15px;
  text-align: center;
  font-size: 16px;
  border: 1px solid #bdbdbd;
`;

export const AddressInput = styled.input`
  width: 100%;
  height: 52px;
  margin-bottom: 10px;
  border: 1px solid #bdbdbd;
`;

export const Square3 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const Square = styled.div`
  background-color: #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  height: 78px;
  width: 78px;
  font-size: 12px;
`;

export const PostSearch = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 15px;
`;
export const MainSetting = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const RadioInput = styled.input``;
export const SignButton = styled.button`
  :hover {
    cursor: pointer;
  }
  :active {
    border: 3px solid black;
  }
  background-color: #ffd600;
  width: 179px;
  height: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.div`
  color: red;
  text-align: left;
  width: 100%;
  height: 30px;
`;
