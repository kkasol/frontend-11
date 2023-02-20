import { gql } from "@apollo/client";

export const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUsedItemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUsedItemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;

export const UPDATE_USED_ITEM_QUESTION = gql`
  mutation updateUsedItemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUsedItemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`;
