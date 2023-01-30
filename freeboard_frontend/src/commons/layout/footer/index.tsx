import styled from "@emotion/styled";

export default function LayoutFooter(): JSX.Element {
  const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    background-color: green;
  `;

  return <Wrapper>푸터 영역</Wrapper>;
}
