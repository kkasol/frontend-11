import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
interface ILayoutPageProps {
  children: JSX.Element;
}
const HIDDEN_LAYOUT = ["/"];

export default function LayoutPage(props: ILayoutPageProps): JSX.Element {
  const router = useRouter();
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);
  return (
    <>
      {!isHiddenLayout && <LayoutHeader />}
      {!isHiddenLayout && <LayoutBanner />}
      {!isHiddenLayout && <LayoutNavigation />}

      <Body>{props.children}</Body>
    </>
  );
}
