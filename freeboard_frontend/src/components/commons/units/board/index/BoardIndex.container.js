import BoardIndexUI from "./BoardIndex.presenter";
import { useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
import { FETCH_BOARDS } from "./BoardIndex.query";

export default function BoardIndex() {
  //   const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  return <BoardIndexUI data={data} />;
}
