import LayoutHeader from "./header/index";
import LayoutBanner from "./banner/index";
import LayoutNavigation from "./navigation/index";
import LayoutFooter from "./footer/index";
import { useRouter } from "next/router";

const HIDDEN_HEADERS = [
  "/section13/13-01-library-icon",
  "/section13/13-02-library-star",
];

interface ILayoutProps {
  children: JSX.Element;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log("======");
  console.log(router.asPath);
  console.log("======");
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ height: "500px", display: "flex" }}>
        <div style={{ width: "30%", backgroundColor: "Orange" }}>사이드바</div>
        <div style={{ width: "70%" }}>{props.children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}
