import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Script from "next/script";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

interface IMyPageUIProps {
  data: any;
  onChangePrice: ChangeEventHandler<HTMLSelectElement>;
  onClickPayment: MouseEvent<HTMLButtonElement>;
}

export default function MyPageUI(props: IMyPageUIProps): JSX.Element {
  console.log(props.data);
  return (
    <>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      <Script src="https://cdn.iamport.kr/v1/iamport.js"></Script>
      <div>{props.data?.fetchUserLoggedIn.name}</div>
      <div>{props.data?.fetchUserLoggedIn.email}</div>
      <div>{props.data?.fetchUserLoggedIn.userPoint.amount}</div>
      <select name="price" onChange={props.onChangePrice}>
        <option value="" selected>
          금액 선택
        </option>
        <option value="500">500원</option>
        <option value="1000">1,000원</option>
        <option value="2000">2,000원</option>
        <option value="5000">5,000원</option>
      </select>

      <button onClick={props.onClickPayment}>충전하기</button>
    </>
  );
}
