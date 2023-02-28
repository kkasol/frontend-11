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
import { FETCH_USED_ITEM_QUESTIONS } from "../CommentFinish/CommentFinishQueries";

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

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
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
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: router.query.useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
    setContents("");
  };
  const onClickCommentUpdate = async (): Promise<void> => {
    try {
      const updateUseditemQuestionInput: IUpdateUseditemQuestionInput = {};
      console.log(updateUseditemQuestionInput);
      if (contents !== "") updateUseditemQuestionInput.contents = contents;

      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents,
          },
          useditemQuestionId: props.el._id,
        },

        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
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
      onChangeContents={onChangeContents}
      onClickCommentSubmit={onClickCommentSubmit}
      onClickCommentUpdate={onClickCommentUpdate}
      contents={contents}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
