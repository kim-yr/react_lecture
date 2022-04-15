import { useState, useEffect } from "react";
export default function Effect() {
  //   let count = 0;
  const [count, setCount] = useState(100);
  const [name, setName] = useState("강동원");
  //   useEffect(callbackFunction)
  useEffect(() => {
    console.log("나는 화면이 랜더링 되면 호출되는 함수입니다.");
    return () => {
      console.log("나는 화면에서 사라질 때 호출되는 함수입니다.");
    };
  }, []);
  useEffect(() => {
    console.log("나는 name값이 바뀌면 호출되는 함수입니다.");
  }, [name]);
  return (
    <div>
      <span style={{ fontSize: "30px", color: "white" }}>{count}</span>
      <button
        onClick={() => {
          //   count++;
          setCount(count + 1);
        }}
      >
        count update
      </button>
      <hr />
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}
