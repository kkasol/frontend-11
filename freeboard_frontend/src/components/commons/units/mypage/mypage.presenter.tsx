import { useRouter } from "next/router";
import Script from "next/script";
import { ChangeEvent, useState } from "react";
import { IUser } from "../../../../commons/types/generated/types";

interface IMyPageUIProps {
  data: any;
}

export default function MyPageUI(props: IMyPageUIProps): JSX.Element {
  const router = useRouter();
  const [price, setPrice] = useState("");
  const [priceName, setPriceName] = useState("");
  const onChangePrice = (event: ChangeEvent<HTMLSelectElement>) => {
    setPrice(event.target.value);
    setPriceName(event.target.value);
  };
  const onClickPayment = (): void => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "kakaopay",
        pay_method: "card",
        name: priceName,
        amount: price,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/mypage",
      },
      (rsp: any) => {
        if (rsp.success === true) {
        } else {
        }
      }
    );
  };
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

      <select name="price" onChange={onChangePrice}>
        <option value="" selected>
          금액 선택
        </option>
        <option value="500">500원</option>
        <option value="1000">1,000원</option>
        <option value="2000">2,000원</option>
        <option value="5000">5,000원</option>
      </select>

      <button onClick={onClickPayment}>충전하기</button>
    </>
  );
}
