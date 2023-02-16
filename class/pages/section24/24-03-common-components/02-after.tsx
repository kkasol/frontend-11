import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.validation";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import Input01 from "../../../src/components/commons/inputs/01";
import Button01 from "../../../src/components/commons/buttons/01";
interface IFormData {
  writer: string;
  title: string;
  contents: string;
  email: string;
  password: string;
  phone: string;
  //   boardAddress: {
  //     addressDetail: string;
}
// }

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };
  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자: <Input01 register={register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      제목: <Input01 register={register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용:
      <Input01 register={register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      {/* 주소: <input type="text" {...register("boardAddress.addressDetail")} /> */}
      이메일:
      <Input01 register={register("email")} />
      <div style={{ color: "red" }}>{formState.errors.email?.message}</div>
      비밀번호:
      <Input01 type="password" register={register("password")} />
      <div style={{ color: "red" }}>{formState.errors.password?.message}</div>
      {/* 전화번호: <input type="text" {...register("phone")} />
      <div style={{ color: "red" }}>{formState.errors.phone?.message}</div> */}
      <Button01 title="등록하기" isActive={formState.isValid} />
    </form>
  );
}

/* 
<button type="reset">지우자!</button>
<button type="submit">등록하자!</button> // 기본값
<button type="button">기본값인 submit을 실행하지 않고 자기에게 걸린 onClick만 실행!</button>
*/
