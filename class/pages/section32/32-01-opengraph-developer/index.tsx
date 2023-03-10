// 개발자일 때 => 디스코드, 카카오톡, 슬랙 등

import axios from "axios";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

export default function OpengraphDeveloperPage(): JSX.Element {
  const onClickEnter = async (): Promise<void> => {
    // 1. 채팅 데이터에 주소가 있는지 찾기(ex, http~로 시작되는 것)

    // 2. 해당 주소로 스크래핑 하기
    const result = await axios.get(
      "http://localhost:3000/section32/32-01-opengraph-provider"
    ); // CORS;
    // 3. 메타 태그에서 오픈그래프 (og: ) 찾기
    result.data.split("<meta").filter((el: string) => el.includes("og: "));
  };

  return (
    <button onClick={wrapAsync(onClickEnter)}>채팅 입력 후 엔터 치기!</button>
  );
}
