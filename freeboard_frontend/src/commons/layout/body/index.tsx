import styled from "@emotion/styled";

export default function LayoutBody(): JSX.Element {
  const Wrapper = styled.div`
    width: 100%;
    height: 50px;
  `;

  return <Wrapper>바디 영역</Wrapper>;
}
