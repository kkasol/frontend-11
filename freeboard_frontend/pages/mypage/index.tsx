import { withAuth } from "../../src/commons/hocs/withAuth";

function MyPage() {
  return <div>aaa</div>;
}

export default withAuth(MyPage);
