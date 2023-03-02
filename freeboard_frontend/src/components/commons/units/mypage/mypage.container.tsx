import { useQuery } from "@apollo/client";
import { IQuery, IUser } from "../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../market/MarketComment/CommentWrite/CommentWriteQueries";
import MyPageUI from "./mypage.presenter";

export default function MyPage(): JSX.Element {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  console.log(data);

  return <MyPageUI data={data} />;
}
