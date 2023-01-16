import {
  Wrapper,
  Signup,
  Writer,
  NpInput,
  SignTitle,
  MyInput,
  Name,
  Password,
  NamePassword,
  MyInputBody,
  Square,
  Search,
  MyInputMini,
  PostSearch,
  AddressInput,
  Square3,
  MainSetting,
  RadioYoutubeSection,
  RadioPictureSection,
  RadioYoutube,
  RadioPicture,
  SignButton,
  ErrorText,
} from "../write/BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <Wrapper>
      <Signup>게시물 등록</Signup>
      <NamePassword>
        <Name>
          <Writer>작성자</Writer>
          <NpInput
            input
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeName}
          />
          <ErrorText>{props.nameError}</ErrorText>
        </Name>

        <Password>
          <SignTitle>비밀번호</SignTitle>
          <NpInput
            input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={props.onChangePassword}
          />
          <ErrorText>{props.passwordError}</ErrorText>
        </Password>
      </NamePassword>
      <SignTitle>제목</SignTitle>
      <MyInput
        input
        type="text"
        placeholder="제목을 작성해주세요."
        onChange={props.onChangeTitle}
      />
      <ErrorText>{props.titleError}</ErrorText>
      <SignTitle>내용</SignTitle>
      <MyInputBody
        input
        type="textarea"
        placeholder="내용을 작성해주세요."
        onChange={props.onChangeBody}
      />
      <ErrorText>{props.bodyError}</ErrorText>
      <SignTitle>주소</SignTitle>
      <PostSearch>
        <MyInputMini
          input
          type="text"
          onChange={props.onChangeAddressCode}
          placeholder="07250"
        />
        <Search type="button">우편번호 검색</Search>
      </PostSearch>
      <AddressInput input type="text" onChange={props.onChangeAddress} />
      <AddressInput input type="text" onChange={props.onChangeAddressDetail} />
      <SignTitle>유튜브</SignTitle>
      <MyInput input type="text" placeholder="링크를 복사해주세요." />
      <SignTitle>사진 첨부</SignTitle>
      <Square3>
        <Square>
          <span>+</span>
          <div>Upload</div>
        </Square>
        <Square>
          <span>+</span>
          <div>Upload</div>
        </Square>
        <Square>
          <span>+</span>
          <div>Upload</div>
        </Square>
      </Square3>
      <SignTitle>메인 설정</SignTitle>
      <MainSetting>
        <RadioYoutubeSection>
          <RadioYoutube input type="radio" name="Radio-button" />
          유튜브
        </RadioYoutubeSection>
        <RadioPictureSection>
          <RadioPicture input type="radio" name="Radio-button" />
          사진
        </RadioPictureSection>
      </MainSetting>
      <SignButton onClick={props.onClickSignup}>등록하기</SignButton>
    </Wrapper>
  );
}
