export * as st from "./BoardIndex.styles";

export default function BoardIndexUI(props) {
  return;
  <>
    {props.data?.fetchBoards.map((el) => (
      <st.BoardIndex key={el.number}>
        <st.BoardNumber>번호{el.number}</st.BoardNumber>
        <st.BoardTitle>제목{el.title}</st.BoardTitle>
        <st.BoardWriter>작성자P{el.writer}</st.BoardWriter>
        <st.BoardDate>날짜{el.createdAt}</st.BoardDate>
      </st.BoardIndex>
    ))}
  </>;
}
