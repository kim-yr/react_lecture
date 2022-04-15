import React, { useRef, useState } from "react";

export default function UseRefComponent() {
  const [count, setCount] = useState(0); //값이 바뀌는걸 다른데서 감지 해야할때는 useState
  const refCount = useRef(0); //useRef로 선언된 변수는 값을 계속 가지고 간다.
  let varCount = 0; //일반 변수는 함수가 호출되면 다시 초기화

  // 새로고침이 되면 전부 초기화 된다.

  const nameRef = useRef(); //useRef로 선언된 변수는 값을 계속 가지고 간다.
  function increaseCount() {
    setCount(count + 1);
  }

  function increaseRefCount() {
    //setCount(count + 1);
    refCount.current++;
    console.log("refCount===", refCount.current);
  }
  function increaseVarCount() {
    varCount++;
    console.log("varCount===", varCount);
  }
  function login() {
    alert(`${nameRef.current.value}님 반갑습니다.`);
    nameRef.current.value = "";
    nameRef.current.focus();
  }
  return (
    <div>
      <div>
        <p style={{ color: "#fff" }}>useState로 사용되는 count : {count}</p>
        <button onClick={increaseCount}>useState로 사용되는 count 증가</button>
      </div>
      <hr />
      <div>
        <p style={{ color: "#fff" }}>useRef로 사용되는 count : {refCount.current}</p>
        <button onClick={increaseRefCount}>useRef로 사용되는 count 증가</button>
      </div>
      <hr />
      <div>
        <p style={{ color: "#fff" }}>일반변수 varCount : {varCount}</p>
        <button onClick={increaseVarCount}>일반변수 varCount로 사용되는 count 증가</button>
      </div>

      <hr />
      <div>
        <input type="text" placeholder="이름 입력" ref={nameRef} />
        <button onClick={login}>LOGIN</button>
      </div>
    </div>
  );
}
