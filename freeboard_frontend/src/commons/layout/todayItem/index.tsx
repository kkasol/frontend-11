import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 150px;
  height: 373px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Title = styled.div`
  font-weight: 500;
  margin: 20px 0px 15px 0px;
`;

const ImageBox = styled.div``;
const Image = styled.img`
  width: 90px;
  height: 90px;
  margin-bottom: 8px;
`;

interface ITodayItemProps {
  name: string;
  remarks: string;
  images: string[];
}

function useRecentItems() {
  const [recentItems, setRecentItems] = useState(() => {
    if (typeof window !== "undefined") {
      const basketItems = JSON.parse(localStorage.getItem("baskets")) ?? [];
      return basketItems;
    } else {
      return [];
    }
  });

  useEffect(() => {
    const updateRecentItems = () => {
      if (typeof window !== "undefined") {
        const basketItems = JSON.parse(localStorage.getItem("baskets")) ?? [];
        setRecentItems(basketItems);
      }
    };

    window.addEventListener("storage", updateRecentItems);

    return () => {
      window.removeEventListener("storage", updateRecentItems);
    };
  }, []);

  return recentItems;
}
export default function TodayItem(props: ITodayItemProps) {
  const recentItems = useRecentItems();
  return (
    <>
      <Wrapper>
        <Title>최근 본 상품</Title>
        {recentItems.map((el) => (
          <ImageBox key={el.id}>
            {el.images[0] ? (
              <Image src={`https://storage.googleapis.com/${el.images[0]}`} />
            ) : (
              <Image src={`/basicImage.png`} />
            )}
          </ImageBox>
        ))}
      </Wrapper>
    </>
  );
}
