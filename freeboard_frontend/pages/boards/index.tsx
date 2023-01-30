import BoardList from "../../src/components/commons/units/board/list/BoardList.container";
import PaginationPage from "../../src/commons/pagination/index";
export default function BoardListPage() {
  return (
    <>
      <BoardList />;
      <PaginationPage />;
    </>
  );
}
