import styled from "@emotion/styled";
export default function LayoutHeader(): JSX.Element {
  const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    background-color: red;
  `;

  return <Wrapper>헤더 영역</Wrapper>;
}
