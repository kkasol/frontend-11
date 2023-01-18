import * as st from "../write/BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <st.Wrapper>
      <st.Signup>게시물 등록</st.Signup>
      <st.NamePassword>
        <st.Name>
          <st.Writer>작성자</st.Writer>
          <st.NpInput
            input
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeName}
          />
          <st.ErrorText>{props.nameError}</st.ErrorText>
        </st.Name>

        <st.Password>
          <st.SignTitle>비밀번호</st.SignTitle>
          <st.NpInput
            input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={props.onChangePassword}
          />
          <st.ErrorText>{props.passwordError}</st.ErrorText>
        </st.Password>
      </st.NamePassword>
      <st.SignTitle>제목</st.SignTitle>
      <st.MyInput
        input
        type="text"
        placeholder="제목을 작성해주세요."
        onChange={props.onChangeTitle}
      />
      <st.ErrorText>{props.titleError}</st.ErrorText>
      <st.SignTitle>내용</st.SignTitle>
      <st.MyInputBody
        input
        type="textarea"
        placeholder="내용을 작성해주세요."
        onChange={props.onChangeBody}
      />
      <st.ErrorText>{props.bodyError}</st.ErrorText>
      <st.SignTitle>주소</st.SignTitle>
      <st.PostSearch>
        <st.MyInputMini
          input
          type="text"
          onChange={props.onChangeAddressCode}
          placeholder="07250"
        />
        <st.Search type="button">우편번호 검색</st.Search>
      </st.PostSearch>
      <st.AddressInput input type="text" onChange={props.onChangeAddress} />
      <st.AddressInput
        input
        type="text"
        onChange={props.onChangeAddressDetail}
      />
      <st.SignTitle>유튜브</st.SignTitle>
      <st.MyInput input type="text" placeholder="링크를 복사해주세요." />
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
          <st.RadioYoutube input type="radio" name="Radio-button" />
          유튜브
        </st.RadioYoutubeSection>
        <st.RadioPictureSection>
          <st.RadioPicture input type="radio" name="Radio-button" />
          사진
        </st.RadioPictureSection>
      </st.MainSetting>
      <st.SignButton onClick={props.onClickSignup}>등록하기</st.SignButton>
    </st.Wrapper>
  );
}
