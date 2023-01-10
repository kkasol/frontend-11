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
  Square3,
  MainSetting,
  RadioInput,
  Sign,
  SignButton,
} from "../../../styles/01-02-emotion";

export default function EmotionPage() {
  //여기는 자바스크립트 쓰는 곳
  return (
    <Wrapper>
      <Signup>게시물 등록</Signup>
      <NamePassword>
        <Name>
          <Writer>작성자</Writer>
          <NpInput input type="text" placeholder="이름을 적어주세요." />
        </Name>
        <Password>
          <SignTitle>비밀번호</SignTitle>
          <NpInput input type="text" placeholder="비밀번호를 입력해주세요." />
        </Password>
      </NamePassword>
      <SignTitle>제목</SignTitle>
      <MyInput input type="text" placeholder="제목을 작성해주세요." />
      <SignTitle>내용</SignTitle>
      <MyInputBody input type="text" placeholder="내용을 작성해주세요." />
      <SignTitle>주소</SignTitle>
      <PostSearch>
        <MyInputMini input type="text" placeholder="07250" />
        <Search>우편번호 검색</Search>
      </PostSearch>
      <MyInput input type="text" />
      <MyInput input type="text" />
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
        <RadioInput input type="radio" name="youtube" />
        유튜브
        <RadioInput input type="radio" name="youtube" />
        사진
      </MainSetting>
      <Sign>
        <SignButton>등록하기</SignButton>
      </Sign>
    </Wrapper>
  );
}
