import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import styled from "@emotion/styled";
const Body = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
interface ILayoutPageProps {
  children: JSX.Element;
}
export default function LayoutPage(props: ILayoutPageProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />

      <Body>{props.children}</Body>
      <LayoutFooter />
    </>
  );
}
