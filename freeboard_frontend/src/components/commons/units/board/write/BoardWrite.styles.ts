import styled from "@emotion/styled";
import { Button } from "antd";

export const SignUp = styled.div`
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
  margin: 100px;
`;
export const NamePassword = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-right: 10px;
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
  font-size: 16px;
`;
export const MyInput = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 10px;
  font-size: 16px;
`;
export const MyInputBody = styled.textarea`
  width: 98%;
  height: 500px;
  border: 1px solid #bdbdbd;
  padding: 20px 20px 0px 20px;
  resize: none;
  font-size: 16px;
`;
export const Search = styled.button`
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: gray;
  }
  background-color: black;
  color: white;
  width: 124px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
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
  font-size: 16px;
`;

export const Square3 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 16px;
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
  margin-right: 7px;
`;
export const MainSetting = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const RadioCircle = styled.div`
  border: 1px solid black;
`;
export const RadioYoutubeSection = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const RadioPictureSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const RadioYoutube = styled.input`
  accent-color: blue;
  width: 18px;
  height: 18px;
  margin-right: 7px;
`;
export const RadioPicture = styled.input`
  accent-color: blue;
  width: 18px;
  height: 18px;
  margin-right: 7px;
`;
interface IBtn {
  isActive: boolean;
}
export const SignButton = styled.button<IBtn>`
  :hover {
    cursor: ${(props: any) => (props.isActive === true ? "pointer" : "")};
  }
  :active {
    border: 3px solid black;
  }

  width: 179px;
  height: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: ${(props: any) =>
    props.isActive === true ? "#ffd600" : ""};
`;

export const ErrorText = styled.div`
  color: red;
  text-align: left;
  width: 100%;
  height: 30px;
`;
