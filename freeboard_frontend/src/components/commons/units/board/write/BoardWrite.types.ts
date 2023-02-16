import { ChangeEvent, ChangeEventHandler } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IBoardWriteUIProps {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeBody: ChangeEventHandler<HTMLTextAreaElement>;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;

  onChangeAddressCode: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  onCompleteAddressSearch: (data: any) => void;

  onClickAddressSearch: () => void;
  onClickEdit: () => void;
  onClickSignUp: () => void;
  nameError: string;
  passwordError: string;
  titleError: string;
  bodyError: string;
  data?: Pick<IQuery, "fetchBoard">;
  isEdit: boolean;
  isActive: boolean;
  isOpen: boolean;

  isModalOpen: boolean;
  handleComplete: () => void;
  zipcode?: string;
  address?: string;
  addressDetail?: string;
  fileUrls: string[];
}

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
