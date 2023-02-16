import { useForm } from "react-hook-form";

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit } = useForm();
  const onClickSubmit = (data): void => {
    console.log(data);
  };
  console.log("리렌더링 되나요?");
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      제목: <input type="text" {...register("title")} />
      내용: <input type="text" {...register("contents")} />
      <button type="submit">GRAPHQL-API 요청하기</button>
    </form>
  );
}

/* 
<button type="reset">지우자!</button>
<button type="submit">등록하자!</button> // 기본값
<button type="button">기본값인 submit을 실행하지 않고 자기에게 걸린 onClick만 실행!</button>
*/
