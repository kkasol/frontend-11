import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.query";

export default function BoardWrite() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [bodyError, setBodyError] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();
  const [addresscode, setAddressCode] = useState();
  const [address, setAddress] = useState();
  const [addressdetail, setAddressDetail] = useState();

  function onChangeName(event) {
    const value = event.target.value;
    setName(value);
    if (value !== "") {
      setNameError("");
    }
  }
  function onChangePassword(event) {
    const value = event.target.value;
    setPassword(value);
    if (value !== "") {
      setPasswordError("");
    }
  }
  function onChangeTitle(event) {
    const value = event.target.value;
    setTitle(value);
    if (value !== "") {
      setTitleError("");
    }
  }
  function onChangeBody(event) {
    const value = event.target.value;
    setBody(value);
    if (value !== "") {
      setBodyError("");
    }
  }
  function onChangeAddressCode(event) {
    const value = event.target.value;
    setAddressCode(value);
  }

  function onChangeAddress(event) {
    const value = event.target.value;
    setAddress(value);
  }

  function onChangeAddressDetail(event) {
    const value = event.target.value;
    setAddressDetail(value);
  }

  const onClickSignup = async () => {
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
            password: password,
            title: title,
            contents: body,
            boardAddress: {
              zipcode: addresscode,
              address: address,
              addressDetail: addressdetail,
            },
          },
        },
      });
      console.log(result);
      router.push(`./boards-moved/${result.data.createBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
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
      onClickSignup={onClickSignup}
    />
  );
}
