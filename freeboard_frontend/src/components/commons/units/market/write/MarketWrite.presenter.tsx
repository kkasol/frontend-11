import Input01 from "../../../../../commons/input/01";
import * as S from "./MarketWrite.styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseFieldArrayReturn, useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useAuth } from "../../../../../commons/hooks/useAuth";
import { useEffect, useState } from "react";
import Uploads01 from "../../../../../commons/uploads/01/Uploads01.container";
import { useRouter } from "next/router";
import { IQuery } from "../../../../../commons/types/generated/types";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import KakaoMapPage from "../../../../../commons/library/kakaomap";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
interface IMarketWrite {
  data?: Pick<IQuery, "fetchUseditem">;
  isEdit: boolean;
  handleComplete: () => void;
  isModalOpen: boolean;
}

interface IFormData {
  name: string;
  remarks: string;
  contents: string;
  price: string;
  tags: string;
  fileUrls: UseFieldArrayReturn;
  useditemAddress: string;
}

const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;

export default function MarketWrite(props: IMarketWrite): JSX.Element {
  useAuth();
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState(["", ""]);
  const [useditemAddress, setUseditemAddress] = useState("");
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [isOpen, setIsOpen] = useState(false);
  const schema = yup.object({
    name: yup.string().required("작성자를 입력해주세요."),
    remarks: yup
      .string()
      .required("상품 요약을 입력해주세요.")
      .max(100, "제목은 100자 이내입니다."),
    contents: yup.string().required(),
    price: yup
      .string()
      .required("가격을 입력해주세요.")
      .matches(/^[0-9]*$/, "숫자만 입력 가능합니다."),
    tags: yup.string().required("태그를 입력해주세요."),
    images: yup.array().notRequired(),
  });

  console.log(props.data);
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: props.data?.fetchUseditem,
  });
  const onSubmit = async (data: IFormData) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            images: [...fileUrls],
            useditemAddress: {
              address: useditemAddress,
            },
          },
        },
      });
      Modal.success({ content: "상품 등록에 성공했습니다." });
      router.push(`/market/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onClickUpdate = async (data: IFormData) => {
    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            images: [...fileUrls],
            useditemAddress: data.useditemAddress,
          },
          useditemId: router.query.useditemId,
        },
      });

      Modal.success({ content: "상품 수정에 성공했습니다." });
      router.push(`/market/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    const images = props.data?.fetchUseditem.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };
  const onClickAddressSearch = (): void => {
    setIsOpen((prev) => !prev);
  };
  const onCompleteAddressSearch = (data: Address): void => {
    setUseditemAddress(data.address);
    setIsOpen((prev) => !prev);
  };
  return (
    <form>
      {isOpen && (
        <S.AddressModal visible={true}>
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.Wrapper>
        <S.Title>상품 {props.isEdit ? "수정하기" : "등록하기"}</S.Title>
        <S.Label>상품명</S.Label>
        <Input01 register={register("name")} />
        <div style={{ color: "red" }}>{formState.errors.name?.message}</div>

        <S.Label>요약</S.Label>
        <Input01 type="text" register={register("remarks")} />
        <div style={{ color: "red" }}>{formState.errors.remarks?.message}</div>

        <S.Label>상품 설명</S.Label>
        <ReactQuill
          onChange={onChangeContents}
          style={{ height: "300px", marginBottom: "80px" }}
        />
        <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>

        <S.Label>판매 가격</S.Label>
        <Input01 type="text" register={register("price")} />
        <div style={{ color: "red" }}>{formState.errors.price?.message}</div>

        <S.Label>태그 입력</S.Label>
        <Input01 type="text" register={register("tags")} />
        <div style={{ color: "red" }}>{formState.errors.tags?.message}</div>

        <S.Label>거래 위치</S.Label>
        <S.Label>주소</S.Label>
        <S.PostSearch>
          <S.Search type="button" onClick={onClickAddressSearch}>
            우편번호 검색
          </S.Search>
          {props.isModalOpen && (
            <Modal title="주소 검색" open={true}>
              {/* <DaumPostcodeEmbed onComplete={handleComplete} /> */}
            </Modal>
          )}
        </S.PostSearch>
        <S.AddressInput
          readOnly
          register={register("useditemAddress")}
          value={
            props.data?.fetchUseditem.useditemAddress !== ""
              ? props.data?.fetchUseditem.useditemAddress
              : ""
          }
        />
        {/* <S.AddressInput
          type="text"
          onChange={onChangeAddressDetail}
          defaultValue={
            props.data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
          }
        /> */}
        <KakaoMapPage useditemAddress={useditemAddress} />
        <S.Label>사진 첨부</S.Label>
        <S.ImageBox>
          {fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={onChangeFileUrls}
            />
          ))}
        </S.ImageBox>
        <S.Label>메인 사진 설정</S.Label>

        <S.RadioSection>
          <S.Picture1Section>
            <S.Picture1 type="radio" name="Radio-button" />
            사진 1
          </S.Picture1Section>
          <S.Picture2Section>
            <S.Picture2 type="radio" name="Radio-button" />
            사진 2
          </S.Picture2Section>
        </S.RadioSection>
        <S.BtnSection>
          <S.SubmitBtn
            onClick={
              props.isEdit
                ? handleSubmit(onClickUpdate)
                : handleSubmit(onSubmit)
            }
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitBtn>
        </S.BtnSection>
      </S.Wrapper>
    </form>
  );
}
