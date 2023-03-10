import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
  IUpdateUseditemQuestionAnswerInput,
  IUseditemQuestionAnswer,
} from "../../../../../../commons/types/generated/types";
import CommentAnswerWriterUI from "./CommentAnswerWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./CommentAnswerWrite.queries";

export interface IUsedItemQuestionAnswerWriteProps {
  isAnswer?: boolean;
  setIsAnswer?: Dispatch<SetStateAction<boolean>>;
  el?: IUseditemQuestionAnswer;
}

export default function CommentAnswerWriter(
  props: IUsedItemQuestionAnswerWriteProps
): JSX.Element {
  const router = useRouter();
  const [contents, setContents] = useState("");

  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWER);

  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USED_ITEM_QUESTION_ANSWER);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
  };

  const onClickCommentSubmit = async (): Promise<void> => {
    try {
      if (contents === "") {
        alert("내용이 입력되지 않았습니다.");
      }
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionId: router.query.useditemQuestionId,
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_USED_ITEM_QUESTIONS_ANSWER,
        //     variables: { useditemId: router.query.useditemId },
        //   },
        // ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
    setContents("");
  };
  const onClickCommentUpdate =
    (useditemQuestionAnswerId: string) => async (event) => {
      try {
        const updateUseditemQuestionAnswerInput: IUpdateUseditemQuestionAnswerInput =
          {};
        if (contents !== "")
          updateUseditemQuestionAnswerInput.contents = contents;

        await updateUseditemQuestionAnswer({
          variables: {
            updateUseditemQuestionAnswerInput,
            useditemQuestionAnswerId: String(props.el?._id),
          },

          //   refetchQueries: [
          // {
          //   query: FETCH_USED_ITEM_QUESTIONS_ANSWER,
          //   variables: { useditemId: router.query.useditemId },
          // },
          //   ],
        });

        props.setIsAnswer?.(false);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    };
  console.log(props.isAnswer);
  return (
    <CommentAnswerWriterUI
      onChangeContents={onChangeContents}
      onClickCommentSubmit={onClickCommentSubmit}
      onClickCommentUpdate={onClickCommentUpdate}
      contents={contents}
      isAnswer={props.isAnswer}
      el={props.el}
    />
  );
}
