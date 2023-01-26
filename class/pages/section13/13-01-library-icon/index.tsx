import { CloseOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { MouseEvent } from "react";

const MyIcon = styled(CloseOutlined)`
  color: red;
  font-size: 50px;
`;

export default function LibraryIconPage(): JSX.Element {
  const onClickDelete = (event: MouseEvent<HTMLDivElement>): void => {
    event.currentTarget.id;
  };
  return <MyIcon id="삭제할게시글ID" onClick={onClickDelete} />;
}
