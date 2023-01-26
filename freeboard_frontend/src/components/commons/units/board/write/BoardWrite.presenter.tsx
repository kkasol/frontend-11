import * as st from "./BoardWrite.styles";

export default function BoardWriteUI(props: any) {
  return (
    <st.Wrapper>
      <st.SignUp>게시물 {props.isEdit ? "수정" : "등록"}</st.SignUp>
      <st.NamePassword>
        <st.Name>
          <st.Writer>작성자</st.Writer>
          <st.NpInput
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeName}
            defaultValue={props.data?.fetchBoard?.writer}
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
        defaultValue={props.data?.fetchBoard.body}
      />
      <st.ErrorText>{props.bodyError}</st.ErrorText>
      <st.SignTitle>주소</st.SignTitle>
      <st.PostSearch>
        <st.MyInputMini
          type="text"
          onChange={props.onChangeAddressCode}
          defaultValue={props.data?.fetchBoard.addresscode}
          placeholder="07250"
        />
        <st.Search type="button">우편번호 검색</st.Search>
      </st.PostSearch>
      <st.AddressInput
        type="text"
        onChange={props.onChangeAddress}
        defaultValue={props.data?.fetchBoard.address}
      />
      <st.AddressInput
        type="text"
        onChange={props.onChangeAddressDetail}
        defaultValue={props.data?.fetchBoard.addressDetail}
      />
      <st.SignTitle>유튜브</st.SignTitle>
      <st.MyInput type="text" placeholder="링크를 복사해주세요." />
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
  );
}
