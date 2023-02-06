import { gql, useMutation } from "@apollo/client";
import type { ChangeEvent } from "react";
import { useState, useRef } from "react";
import { checkValidationFile } from "../../../src/commons/libraries/validationFile";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUpLoadPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유: input type="file" multiple 일때 여러 개 드래그 가능
    console.log(file);

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });
    setImageUrl(result.data?.uploadFile.url ?? "");
  };
  const onClickImage = (): void => {
    // document.getElementById("파일태그ID")?.click();
    fileRef.current?.click();
  };

  return (
    <>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지 선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
        accept="image/jpeg,image/png"
      />
      ;<img src={`https://storage.googleapis.com/${imageUrl}`}></img>
    </>
  );
}
