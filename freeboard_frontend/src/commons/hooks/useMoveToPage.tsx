import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../stores/index";

interface IUseMoveToPageReturn {
  visitedPage: string;
  onClickMoveToPage: (path) => () => void;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    setVisitedPage(path);
    void router.push(path);
  };
  return {
    visitedPage,
    onClickMoveToPage,
  };
};
