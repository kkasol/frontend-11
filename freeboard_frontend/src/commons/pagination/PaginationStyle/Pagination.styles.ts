import styled from "@emotion/styled";

interface IPageProps {
  isActive?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1200px;
  font-size: 20px;
`;

export const IndexSpan = styled.span`
  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive ? "red" : "")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;

export const MovePage = styled.button`
  :hover {
    cursor: pointer;
  }
  background-color: white;
  border: none;
`;
