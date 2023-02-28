import { memo } from "react";

function MemoizationWithChildPage(): JSX.Element {
  console.log("자시이 렌더링 됩니다");

  return (
    <>
      <div>==============================</div>
      <h1>저는 자식 컴포넌트입니다</h1>
      <div>==============================</div>
    </>
  );
}

export default memo(MemoizationWithChildPage);
