import type { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.query";
import type { Address } from "react-daum-postcode";
import type {
  IUpdateBoardInput,
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../../commons/types/generated/types";
import { IBoardWriteProps } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [bodyError, setBodyError] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const router = useRouter();
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

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
  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>): void => {
    setYoutubeUrl(event.target.value);
  };
  const onChangeAddressDetail = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setAddressDetail(event.target.value);
  };

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    const images = props.data?.fetchBoard.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

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
            youtubeUrl,
            boardAddress: {
              zipcode,
              address,
              addressDetail,
            },
            images: [...fileUrls],
          },
        },
      });
      router.push(`/boards/${result.data?.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickEdit = async (): Promise<void> => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (
      title === "" &&
      body === "" &&
      youtubeUrl === "" &&
      address === "" &&
      addressDetail === "" &&
      zipcode === "" &&
      !isChangedFiles
    ) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (password === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (title !== "") updateBoardInput.title = title;
    if (body !== "") updateBoardInput.contents = body;
    if (youtubeUrl !== "") updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode !== "" || address !== "" || addressDetail !== "") {
      updateBoardInput.boardAddress = {};
      if (zipcode !== "") updateBoardInput.boardAddress.zipcode = zipcode;
      if (address !== "") updateBoardInput.boardAddress.address = address;
      if (addressDetail !== "")
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) updateBoardInput.images = fileUrls;

    try {
      if (typeof router.query.boardId !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });

      if (result.data?.updateBoard._id === undefined) {
        alert("요청에 문제가 있습니다.");
        return;
      }

      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onClickAddressSearch = (): void => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  return (
    <BoardWriteUI
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      nameError={nameError}
      passwordError={passwordError}
      onChangeTitle={onChangeTitle}
      onChangeBody={onChangeBody}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      bodyError={bodyError}
      titleError={titleError}
      onChangeAddressDetail={onChangeAddressDetail}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickAddressSearch={onClickAddressSearch}
      onChangeFileUrls={onChangeFileUrls}
      onClickSignUp={onClickSignUp}
      onClickEdit={onClickEdit}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      fileUrls={fileUrls}
    />
  );
}
