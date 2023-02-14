import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import SignUpUI from "./signup.presenter";
import { CREATE_USER } from "./signup.queries";

export default function SignUp(): JSX.Element {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
    if (
      event.target.value !== "" &&
      name !== "" &&
      password !== "" &&
      passwordCheck !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
    if (
      email !== "" &&
      event.target.value !== "" &&
      password !== "" &&
      passwordCheck !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
    if (
      email !== "" &&
      name !== "" &&
      event.target.value !== "" &&
      passwordCheck !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangePasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(event.currentTarget.value);
    if (
      email !== "" &&
      name !== "" &&
      password !== "" &&
      event.target.value !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onClickSignUp = async (): Promise<void> => {
    if (email !== "" && name !== "" && password !== "" && passwordCheck !== "")
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              email,
              password,
              name,
            },
          },
        });
        router.push("/boards");
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
  };
  return (
    <SignUpUI
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangePasswordCheck={onChangePasswordCheck}
      onClickSignUp={onClickSignUp}
    />
  );
}
