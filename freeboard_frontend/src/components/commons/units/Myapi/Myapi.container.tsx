import axios from "axios";
import { useEffect, useState } from "react";
import MyApiUI from "./Myapi.presenter";

export default function MyApi() {
  const [emoji, setEmoji] = useState("");
  useEffect(() => {
    const MyEmoji = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setEmoji(result.data.message);
      console.log(result);
    };
    void MyEmoji();
  }, []);

  return <MyApiUI emoji={emoji} />;
}
