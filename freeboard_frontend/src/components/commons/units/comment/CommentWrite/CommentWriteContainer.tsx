import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  IBoardComment,
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IUpdateBoardCommentInput,
} from "../../../../../commons/types/generated/types";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./CommentWriteQueries";
import { FETCH_BOARD_COMMENTS } from "../CommentFinish/CommentFinishQueries";
import BoardCommentWriteUI from "./CommentWritePresenter";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { Dispatch, SetStateAction } from "react";

export interface IBoardCommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IBoardComment;
}

export default function BoardCommentWrite(
  props: IBoardCommentWriteProps
): JSX.Element {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
  };

  const onClickCommentSubmit = async (): Promise<void> => {
    try {
      if (writer === "") {
        alert("작성자가 입력되지 않았습니다.");
      }
      if (password === "") {
        alert("비밀번호가 입력되지 않았습니다.");
      }
      if (contents === "") {
        alert("내용이 입력되지 않았습니다.");
      }
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: star,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }

    setWriter("");
    setPassword("");
    setContents("");
  };
  const onClickCommentUpdate = async (): Promise<void> => {
    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};

      if (contents !== "") updateBoardCommentInput.contents = contents;
      if (star !== props.el?.rating) updateBoardCommentInput.rating = star;

      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents,
          },
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickCommentSubmit={onClickCommentSubmit}
      onClickCommentUpdate={onClickCommentUpdate}
      writer={writer}
      password={password}
      contents={contents}
      setStar={setStar}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
