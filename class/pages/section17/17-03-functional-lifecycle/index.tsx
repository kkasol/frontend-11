import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { StoreWriter } from "@apollo/client/cache/inmemory/writeToStore";

export default function FunctionalCounterPage(): JSX.Element {
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    console.log("그려지고 나서 실행!");
  }, []);
  // componentDidMount(): void {
  //   console.log("그려지고 나서 실행!");
  // }
  useEffect(() => {
    console.log("변경되고 나서 실행!");
  });
  // componentDidUpdate(): void {
  //   console.log("변경되고 나서 실행!");
  // } componentDidMount + componentDidUpdate와 동일

  useEffect(() => {
    return () => {
      console.log("사라지기 전에 실행!");
    };
  }, []);
  // componentWillUnmount(): void {
  //   console.log("사라지기 전에 실행!");
  // }
  // // ex)채팅방 나가기 API

  // 1. useEffect 하나로 합치기
  useEffect(() => {
    console.log("그려지고 나서 실행!");
    return () => {
      console.log("사라지기 전에 실행!");
    };
  }, []);

  // 2. useEffect 잘못된 사용법(1. 추가 렌더링(useEffect 속 useState),
  //                           2. 무한 루프)
  // useEffect(() => {
  // setWriter()
  // setCount((prev)=> prev + 1)
  // }, [count]);

  const onClickCountUp = (): void => {
    console.log(count);
    setCount(1);
  };

  const onClickMove = (): void => {
    void router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!</button>
      <button onClick={onClickMove}>나가기!</button>
    </>
  );
}
