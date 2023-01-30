import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
interface ILayoutPageProps {
  children: JSX.Element;
}
export default function LayoutPage(props: ILayoutPageProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />

      <div>{props.children}</div>
      <LayoutFooter />
    </>
  );
}
