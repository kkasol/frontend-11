import Input01 from "../../../../../commons/input/01";
import * as S from "./MarketWrite.styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseFieldArrayReturn, useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useAuth } from "../../../../../commons/hooks/useAuth";
import { ChangeEvent, useEffect, useState } from "react";
import Uploads01 from "../../../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { IQuery } from "../../../../../commons/types/generated/types";

interface IMarketWrite {
  data?: Pick<IQuery, "fetchBoard">;
}

interface IFormData {
  name: string;
  remarks: string;
  contents: string;
  price: string;
  tags: string;
  // useditemAddress: string;
  fileUrls: UseFieldArrayReturn;
}

const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;
export default function MarketWrite(props: IMarketWrite): JSX.Element {
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  useAuth();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
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
    // useditemAddress: yup
    images: yup.array().notRequired(),
  });

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = async (data: IFormData) => {
    console.log(data);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            // images: fileUrls,
            images: fileUrls.filter((url) => url !== ""),
          },
        },
      });
      console.log(result);

      router.push(`/market/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onChangeFileUrls = (
    fileUrl: string,
    index: number,
    setFileUrls: Function
  ): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };
  console.log(fileUrls);
  // useEffect(() => {
  //   const images = props.data?.fetchBoard.images;
  //   if (images !== undefined && images !== null) setFileUrls([...images]);
  // }, [props.data]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Wrapper>
        <S.Title>상품 등록하기</S.Title>
        <S.Label>상품명</S.Label>
        <Input01 register={register("name")} />
        <div style={{ color: "red" }}>{formState.errors.name?.message}</div>

        <S.Label>요약</S.Label>
        <Input01 type="text" register={register("remarks")} />
        <div style={{ color: "red" }}>{formState.errors.remarks?.message}</div>

        <S.Label>상품 설명</S.Label>
        <Input01 type="text" register={register("contents")} />
        <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>

        <S.Label>판매 가격</S.Label>
        <Input01 type="text" register={register("price")} />
        <div style={{ color: "red" }}>{formState.errors.price?.message}</div>

        <S.Label>태그 입력</S.Label>
        <Input01 type="text" register={register("tags")} />
        <div style={{ color: "red" }}>{formState.errors.tags?.message}</div>

        <S.Label>거래 위치</S.Label>
        <S.Label>사진 첨부</S.Label>
        <S.ImageBox>
          {/* {fileUrls.map((el, index) => (
            <img key={index} src={el} alt="미리보기 이미지" />
          ))} */}
          <Uploads01
            fileUrls={fileUrls}
            onChangeFileUrls={(fileUrl: string, index: number) =>
              onChangeFileUrls(fileUrl, index, setFileUrls)
            }
            index={0}
          />
          <Uploads01
            fileUrls={fileUrls}
            onChangeFileUrls={(fileUrl: string, index: number) =>
              onChangeFileUrls(fileUrl, index, setFileUrls)
            }
            index={1}
          />
          <Uploads01
            fileUrls={fileUrls}
            onChangeFileUrls={(fileUrl: string, index: number) =>
              onChangeFileUrls(fileUrl, index, setFileUrls)
            }
            index={2}
          />
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
          <S.SubmitBtn>등록하기</S.SubmitBtn>
        </S.BtnSection>
      </S.Wrapper>
    </form>
  );
}
