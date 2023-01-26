import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { UPDATE_BOARD, 나의그래프큐엘셋팅 } from "./BoardWrite.queries"; //export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter"; //export default로 1개만 가져오기
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyVariables } from "./BoardWrite.types";

// import BoardWriteUI, {apple} from "./BoardWrite.presenter"; 이렇게도 가능
// import * as qqq from "./BoardWrite.styles";
// //export 한방에 다 가져오기 *에 as로 이름 짓기
// qqq.BlueButton;
// qqq.RedInput;

export default function BoardWrite(props: IBoardWriteProps) {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const router = useRouter();
  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    router.push(
      `/section10/10-02-typescript-boards/${result.data.createBoard.number}`
    );
  };

  const onClickUpdate = async () => {
    const myVariables: IMyVariables = { number: Number(router.query.number) };
    if (writer) myVariables.writer = writer;
    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;

    const result = await updateBoard({
      variables: myVariables,
    });
    router.push(
      `/section10/10-02-typescript-boards/${result.data.updateBoard.number}`
    );
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      data={props.data} //undefined이거나, data이거나 둘 중 하나
    />
  );
}
