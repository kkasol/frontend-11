import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 900px;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 27px;
  font-weight: 700;
  margin-bottom: 50px; ;
`;
export const Label = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
`;
// export const ContentsInput = styled.textarea`
//   height: 150px;
//   margin-bottom: 20px;
// `;
export const ImageBox = styled.div`
  margin-bottom: 20px;
  display: flex;
`;
export const RadioSection = styled.div`
  width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 30px;
`;
export const Picture1Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Picture2Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Picture1 = styled.input`
  accent-color: blue;
  width: 18px;
  height: 18px;
  margin-right: 7px;
`;
export const Picture2 = styled.input`
  accent-color: blue;
  width: 18px;
  height: 18px;
  margin-right: 7px;
`;
export const BtnSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const SubmitBtn = styled.button`
  width: 120px;
  height: 40px; ;
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
export const PostSearch = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 15px;
  margin-right: 7px;
`;

export const AddressModal = styled(Modal)``;
export const AddressSearchInput = styled(DaumPostcode)``;
