import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { MouseEvent } from "react";
const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const MenuItem = styled.div`
  font-size: 25px;
  margin: 0px 60px;

  cursor: pointer;
  :hover {
    color: red;
  }
`;
export default function LayoutHeader(): JSX.Element {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(event.currentTarget.id);
  };

  const MENU_BAR = [
    { name: "자유게시판", page: "/boards" },
    { name: "중고마켓", page: "/market" },
    { name: "마이페이지", page: "/mypage" },
  ];

  return (
    <Wrapper>
      {MENU_BAR.map((el) => (
        <Fragment key={el.page}>
          <MenuItem id={el.page} onClick={onClickMenu}>
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
    </Wrapper>
  );
}
