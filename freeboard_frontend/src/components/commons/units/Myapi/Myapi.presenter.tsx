interface IMyApiUIProp {
  emoji: any;
}

export default function MyApiUI(props: IMyApiUIProp) {
  return (
    <>
      <img src={props.emoji}></img>
    </>
  );
}
