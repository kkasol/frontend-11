import styled from "@emotion/styled";

interface IPageProps {
  isActive?: boolean;
}

export const PaginationPage = styled.span`
  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive ? "blue" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;
