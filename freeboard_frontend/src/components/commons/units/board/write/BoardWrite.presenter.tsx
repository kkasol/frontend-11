import { ChangeEvent, ChangeEventHandler } from "react";
import * as st from "./BoardWrite.styles";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { IQuery } from "../../../../../commons/types/generated/types";
interface IBoardWriteProps {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeBody: ChangeEventHandler<HTMLTextAreaElement>;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;

  onChangeAddressCode: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  nameError: string;
  passwordError: string;
  titleError: string;
  bodyError: string;
  data?: Pick<IQuery, "fetchBoard">;
  isEdit: boolean;
  isActive: boolean;
  isOpen: boolean;
  onClickAddressSearch: () => void;
  onClickEdit: () => void;
  onClickSignUp: () => void;
  isModalOpen: boolean;
  zipcode: string;
  onCompleteAddressSearch: (data: any) => void;
  handleComplete: () => void;
  zipscode?: string;
  address?: string;
  addressDetail?: string;
}

export default function BoardWriteUI(props: IBoardWriteProps) {
  return (
    <>
      {props.isOpen && (
        <st.AddressModal visible={true}>
          <st.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </st.AddressModal>
      )}
      <st.Wrapper>
        <st.SignUp>게시물 {props.isEdit ? "수정" : "등록"}</st.SignUp>
        <st.NamePassword>
          <st.Name>
            <st.Writer>작성자</st.Writer>
            <st.NpInput
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeName}
              defaultValue={props.data?.fetchBoard.writer ?? ""}
              readOnly={Boolean(props.data?.fetchBoard.writer)}
            />
            <st.ErrorText>{props.nameError}</st.ErrorText>
          </st.Name>

          <st.Password>
            <st.SignTitle>비밀번호</st.SignTitle>
            <st.NpInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangePassword}
            />
            <st.ErrorText>{props.passwordError}</st.ErrorText>
          </st.Password>
        </st.NamePassword>
        <st.SignTitle>제목</st.SignTitle>
        <st.MyInput
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
        />
        <st.ErrorText>{props.titleError}</st.ErrorText>
        <st.SignTitle>내용</st.SignTitle>
        <st.MyInputBody
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeBody}
          defaultValue={props.data?.fetchBoard.contents}
        />
        <st.ErrorText>{props.bodyError}</st.ErrorText>
        <st.SignTitle>주소</st.SignTitle>
        <st.PostSearch>
          <st.MyInputMini
            type="text"
            readOnly
            placeholder="07250"
            value={
              props.zipcode !== ""
                ? props.zipcode
                : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
            }
          />

          <st.Search type="button" onClick={props.onClickAddressSearch}>
            우편번호 검색
          </st.Search>
          {props.isModalOpen && (
            <Modal title="주소 검색" open={true}>
              <DaumPostcodeEmbed onComplete={props.handleComplete} />
            </Modal>
          )}
        </st.PostSearch>
        <st.AddressInput
          readOnly
          value={
            props.address !== ""
              ? props.address
              : props.data?.fetchBoard.boardAddress?.address ?? ""
          }
        />
        <st.AddressInput
          type="text"
          onChange={props.onChangeAddressDetail}
          defaultValue={
            props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
          }
        />
        <st.SignTitle>유튜브</st.SignTitle>
        <st.Youtube
          placeholder="링크를 복사해주세요."
          onChange={props.onChangeYoutubeUrl}
          defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
        />
        <st.SignTitle>사진 첨부</st.SignTitle>
        <st.Square3>
          <st.Square>
            <span>+</span>
            <div>Upload</div>
          </st.Square>
          <st.Square>
            <span>+</span>
            <div>Upload</div>
          </st.Square>
          <st.Square>
            <span>+</span>
            <div>Upload</div>
          </st.Square>
        </st.Square3>
        <st.SignTitle>메인 설정</st.SignTitle>
        <st.MainSetting>
          <st.RadioYoutubeSection>
            <st.RadioYoutube type="radio" name="Radio-button" />
            유튜브
          </st.RadioYoutubeSection>
          <st.RadioPictureSection>
            <st.RadioPicture type="radio" name="Radio-button" />
            사진
          </st.RadioPictureSection>
        </st.MainSetting>
        <st.SignButton
          type="button"
          isActive={props.isActive}
          onClick={props.isEdit ? props.onClickEdit : props.onClickSignUp}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </st.SignButton>
      </st.Wrapper>
    </>
  );
}
