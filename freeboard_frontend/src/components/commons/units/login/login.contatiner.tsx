import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import type {
  IQuery,
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import { LOGIN_USER } from "./login.queries";
import LoginUI from "./login.presenter";

export default function Login(): JSX.Element {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };

  const onClickLogin = async (): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;

      if (accessToken === undefined) {
        alert("로그인을 먼저 해주세요");
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      void router.push("/boards");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <LoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    />
  );
}
