import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries"; //export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter"; //export default로 1개만 가져오기
// import BoardWriteUI, {apple} from "./BoardWrite.presenter"; 이렇게도 가능
// import * as qqq from "./BoardWrite.styles";
// //export 한방에 다 가져오기 *에 as로 이름 짓기
// qqq.BlueButton;
// qqq.RedInput;

export default function BoardWrite() {
  const [isActive, setIsActive] = useState(false);
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
  };
  const onChangeWriter = (event) => {
    setWriter(event.target.value);

    if (event.target.value && title && contents) {
      setIsActive(true);
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);

    if (writer && event.target.value && contents) {
      setIsActive(true);
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);

    if (writer && title && event.target.value) {
      setIsActive(true);
    }
  };

  console.log(writer);
  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isActive={isActive}
    />
  );
}
