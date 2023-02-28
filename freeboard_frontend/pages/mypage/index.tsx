import { withAuth } from "../../src/commons/hocs/withAuth";
import MyPage from "../../src/components/commons/units/mypage/mypage.container";

function MyPagePage(): JSX.Element {
  return <MyPage />;
}

export default withAuth(MyPagePage);
