import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
  IUpdateUseditemQuestionInput,
  IUseditemQuestion,
} from "../../../../../../commons/types/generated/types";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./CommentWriteQueries";
import BoardCommentWriteUI from "./CommentWritePresenter";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { Dispatch, SetStateAction } from "react";

export interface IUsedItemQuestionWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IUseditemQuestion;
}

export default function MarketCommentWrite(
  props: IUsedItemQuestionWriteProps
): JSX.Element {
  const router = useRouter();
  const [contents, setContents] = useState("");

  const [createUsedItemQuestion] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  const [updateUsedItemQuestion] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
  };

  const onClickCommentSubmit = async (): Promise<void> => {
    try {
      if (contents === "") {
        alert("내용이 입력되지 않았습니다.");
      }
      await createUsedItemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: router.query.useditemId,
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_BOARD_COMMENTS,
        //     variables: { boardId: router.query.boardId },
        //   },
        // ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }

    setContents("");
  };
  const onClickCommentUpdate = async (): Promise<void> => {
    try {
      const updateUseditemQuestionInput: IUpdateUseditemQuestionInput = {};

      if (contents !== "") updateUseditemQuestionInput.contents = contents;

      await updateUsedItemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents,
          },
          useditemQuestionId: props.el?._id,
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_BOARD_COMMENTS,
        //     variables: { boardId: router.query.boardId },
        //   },
        // ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <BoardCommentWriteUI
      onChangeContents={onChangeContents}
      onClickCommentSubmit={onClickCommentSubmit}
      onClickCommentUpdate={onClickCommentUpdate}
      contents={contents}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
