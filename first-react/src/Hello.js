import World from "./World"; //얘는 export 할 때 default 해서 바로 쓰면 됨
import { useState } from "react"; //얘는 그냥 export로 나가서 중괄호 안에 넣어줘야 함
import UserName from "./UserName";
function Hello({ userAge }) {
  //hook : useState (상태를 바꿔서 화면을 그려야 할 때 사용)
  function showName() {
    console.log("my name is dongwon");
  }
  function showTxt(txt) {
    console.log(txt);
  }
  //   let name = "alo0onge";
  //   console.log(useState("aaa"));
  // const [관리해야 할 상태, 상태를 바꾸는 함수] = useState("기본값");
  const [name, setName] = useState("alo0onge"); //구조분해할당
  let [age, setAge] = useState(25);
  const alertMsg = userAge > 19 ? "성인입니다." : "미성년자입니다.";
  return (
    <div>
      {/* <div>
        <h1>Hello</h1>
        <World></World>
        <button
          onClick={function () {
            console.log("my name is kyr");
          }}
        >
          name
        </button>
      </div>
      <div>
        <button onClick={showName}>name02</button>   {/* callback 함수라 괄호 쓰면 안됨 
      </div>
      <div>
        <input
          type="text"
          onChange={function (e) {
            showTxt(e.target.value);
          }}
        />
      </div> */}
      <h1>
        {name} ({userAge}세 {alertMsg})
      </h1>
      <button
        onClick={function () {
          //   if (name === "alo0onge") {
          //     setName("김예령");
          //   } else {
          //     setName("alo0onge");
          //   }
          setName(name === "alo0onge" ? "김예령" : "alo0onge");
          console.log(name);
        }}
      >
        Change Name
      </button>

      <h1>{age}</h1>
      <button
        onClick={function () {
          setAge(++age);
        }}
      >
        ++
      </button>
      {/* <hr /> */}
      {/* <h1>{name}</h1> */}
      {/* 부모에서 컴포넌트에서 자식 컴포넌트로 값을 전달할 때 props 사용 */}
      {/* <UserName userName={name} /> */}
    </div>
  );
}

export default Hello;
//부품만들기, 내보내기 해야지 다른 곳에서 쓸 수 있음
