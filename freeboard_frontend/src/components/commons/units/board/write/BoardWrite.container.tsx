import { ChangeEvent, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.query";

interface IBoardWrite {
  isEdit: boolean;
  data?: any;
}

export default function BoardWrite(props: IBoardWrite) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [bodyError, setBodyError] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const router = useRouter();
  const [addresscode, setAddressCode] = useState("");
  const [address, setAddress] = useState();
  const [addressDetail, setAddressDetail] = useState();
  const [isActive, setIsActive] = useState(false);
  const [isEdit] = useState(false);

  function onChangeName(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setName(value);
    if (value !== "") {
      setNameError("");
    }
    if (value && password && title && body) {
      setIsActive(true);
    }
    if (!value || !password || !title || !body) {
      setIsActive(false);
    }
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setPassword(value);
    if (value !== "") {
      setPasswordError("");
    }
    if (name && value && title && body) {
      setIsActive(true);
    }
    if (!name || !value || !title || !body) {
      setIsActive(false);
    }
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setTitle(value);
    if (value !== "") {
      setTitleError("");
    }
    if (name && password && value && body) {
      setIsActive(true);
    }
    if (!name || !password || !value || !body) {
      setIsActive(false);
    }
  }
  function onChangeBody(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setBody(value);
    if (value !== "") {
      setBodyError("");
    }
    if (name && password && title && value) {
      setIsActive(true);
    }
    if (!name || !password || !title || !value) {
      setIsActive(false);
    }
  }
  function onChangeAddressCode(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setAddressCode(value);
  }

  function onChangeAddress(event: any) {
    const value = event.target.value;
    setAddress(value);
  }

  function onChangeAddressDetail(event: any) {
    const value = event.target.value;
    setAddressDetail(value);
  }

  const onClickSignUp = async () => {
    if (!name) {
      setNameError("이름을 입력해주세요.");
    } else {
      setNameError("");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    } else {
      setPasswordError("");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    } else {
      setTitleError("");
    }
    if (!body) {
      setBodyError("내용을 입력해주세요.");
    } else {
      setBodyError("");
    }
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: name,
            password,
            title,
            contents: body,
            boardAddress: {
              zipcode: addresscode,
              address,
              addressDetail,
            },
          },
        },
      });
      router.push(`/boards/${result.data.createBoard._id}`);
    } catch (error: any) {
      alert(error.message);
    }
  };
  const onClickEdit = async () => {
    const myVariables = {
      updateBoardInput: {
        title: title,
        contents: body,
      },
      password,
      boardId: router.query.id,
    };
    if (title) myVariables.updateBoardInput.title = title;
    if (body) myVariables.updateBoardInput.contents = body;

    const result = await updateBoard({
      variables: myVariables,
    });
    router.push(`/boards/${result.data.updateBoard._id}`);
  };
  return (
    <BoardWriteUI
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      nameError={nameError}
      passwordError={passwordError}
      onChangeTitle={onChangeTitle}
      onChangeBody={onChangeBody}
      bodyError={bodyError}
      titleError={titleError}
      onChangeAddress={onChangeAddress}
      onChangeAddressCode={onChangeAddressCode}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickSignUp={onClickSignUp}
      onClickEdit={onClickEdit}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
