export default function Checkbox() {
  const qqq2 = (event) => {
    event.stopPropagation();
    alert("2번 클릭");
  };
  const qqq3 = (event) => {
    event.stopPropagation();
    alert("3번 클릭");
  };
  return (
    <div>
      <span onClick={qqq2}>
        <input type="checkbox" onClick={qqq3} />
      </span>
      ;
    </div>
  );
}
