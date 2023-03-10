import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import TodayItem from "./todayItem";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* flex: 1; */
`;

const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: flex-start; */
  /* justify-content: center; */
  /* position: relative; */
`;

const TodayItemWrapper = styled.div`
  position: fixed;
  top: 17vh;
  right: 50px;
  width: 200px;
`;

interface ILayoutPageProps {
  children: JSX.Element;
}

const HIDDEN_LAYOUT = ["/login", "/join", "/"];

export default function LayoutPage(props: ILayoutPageProps): JSX.Element {
  const router = useRouter();
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);
  return (
    <Container>
      {!isHiddenLayout && <LayoutHeader />}
      {!isHiddenLayout && <LayoutNavigation />}
      <Body>{props.children}</Body>
      {!isHiddenLayout && (
        <TodayItemWrapper>
          <TodayItem />
        </TodayItemWrapper>
      )}
    </Container>
  );
}
