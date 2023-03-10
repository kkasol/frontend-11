import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import MyPageUI from "./mypage.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
} from "./mypage.queries";

export default function MyPage(): JSX.Element {
  const router = useRouter();
  const [price, setPrice] = useState("");
  const [priceName, setPriceName] = useState("");
  const onChangePrice = (event: ChangeEvent<HTMLSelectElement>) => {
    setPrice(event.target.value);
    setPriceName(event.target.value);
  };
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const onClickPayment = (): Promise<void> => {
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
      async (rsp: any) => {
        if (rsp.success === true) {
          const result = await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
        } else {
          alert("충전이 실패했습니다!");
        }
      }
    );
  };

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  console.log(data);

  return (
    <MyPageUI
      data={data}
      onChangePrice={onChangePrice}
      onClickPayment={onClickPayment}
    />
  );
}
