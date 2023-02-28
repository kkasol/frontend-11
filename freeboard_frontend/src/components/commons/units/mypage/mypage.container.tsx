import { useQuery } from "@apollo/client";
import { IQuery, IUser } from "../../../../commons/types/generated/types";
import MyPageUI from "./mypage.presenter";
import { FETCH_USER_LOGGED_IN } from "./mypage.queries";

export default function MyPage(): JSX.Element {
  const MyInfo = useQuery<Pick<IQuery, "fetchUserLoggedIn">, IUser>(
    FETCH_USER_LOGGED_IN
  );
  console.log(MyInfo);
  return <MyPageUI />;
}
