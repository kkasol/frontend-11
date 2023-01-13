import { useState } from "react";
import {
  Wrapper,
  Signup,
  Writer,
  NpInput,
  SignTitle,
  MyInput,
  Name,
  Password,
  NamePassword,
  MyInputBody,
  Square,
  Search,
  MyInputMini,
  PostSearch,
  AddressInput,
  Square3,
  MainSetting,
  RadioInput,
  SignButton,
  ErrorText,
} from "../../styles/index_emotion";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function EmotionPage() {
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
          },
        },
      });
      console.log(result);
      router.push(`/section01-01-moved/${result.data.createBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  //여기는 자바스크립트 쓰는 곳

  return (
    <Wrapper>
      <Signup>게시물 등록</Signup>
      <NamePassword>
        <Name>
          <Writer>작성자</Writer>
          <NpInput
            input
            type="text"
            placeholder="이름을 적어주세요."
            onChange={onChangeName}
          />
          <ErrorText>{nameError}</ErrorText>
        </Name>

        <Password>
          <SignTitle>비밀번호</SignTitle>
          <NpInput
            input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangePassword}
          />
          <ErrorText>{passwordError}</ErrorText>
        </Password>
      </NamePassword>
      <SignTitle>제목</SignTitle>
      <MyInput
        input
        type="text"
        placeholder="제목을 작성해주세요."
        onChange={onChangeTitle}
      />
      <ErrorText>{titleError}</ErrorText>
      <SignTitle>내용</SignTitle>
      <MyInputBody
        input
        type="textarea"
        placeholder="내용을 작성해주세요."
        onChange={onChangeBody}
      />
      <ErrorText>{bodyError}</ErrorText>
      <SignTitle>주소</SignTitle>
      <PostSearch>
        <MyInputMini input type="text" placeholder="07250" />
        <Search type="button">우편번호 검색</Search>
      </PostSearch>
      <AddressInput input type="text" />
      <AddressInput input type="text" />
      <SignTitle>유튜브</SignTitle>
      <MyInput input type="text" placeholder="링크를 복사해주세요." />
      <SignTitle>사진 첨부</SignTitle>
      <Square3>
        <Square>
          <span>+</span>
          <div>Upload</div>
        </Square>
        <Square>
          <span>+</span>
          <div>Upload</div>
        </Square>
        <Square>
          <span>+</span>
          <div>Upload</div>
        </Square>
      </Square3>
      <SignTitle>메인 설정</SignTitle>
      <MainSetting>
        <RadioInput input type="radio" name="Radio-button" />
        유튜브
        <RadioInput input type="radio" name="Radio-button" />
        사진
      </MainSetting>
      <SignButton onClick={onClickSignup}>등록하기</SignButton>
    </Wrapper>
  );
}
