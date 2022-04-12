import Hello from "./Hello.js";
import World from "./World.js";
import "./App.css"; //리액트는import로 가져옴, module시스템
// const app = require('') //node.js 는 이렇게 가져왔었음

// jsx
// component : 여러개 코드 한 방에 몰아쓰기
/* 
  - {} 안에 변수명 쓰는 것 => data binding
  - jsx 에서는 부모태그가 딱 하나 있어야 함, 두개이삳이면 오류 남, 필요하다면 전체를 묶어주는 부모태그 만들어야 함, <></> fragment로 묶어도 괜춘
  - className : 우리 눈에는 html로 보이지만 javascript임. js 안에는 class이미 있어서 className 써줘야 함
  - element style -> style={{ fontSize: "150px" }} // -는 빼기라 카멜텍스트로 써야 함
*/
function App() {
  const myName = "alo0onge";
  const mySite = {
    name: "다음",
    url: "http://www.daum.net",
    target: "_blank",
  };
  return (
    <>
      <div className="App">
        <Hello userAge={16} />
        <Hello userAge={15} />
        <Hello userAge={20} />
        <Hello userAge={35} />
        {/* <World /> */}
        {/* <header className="App-header">
          <h1>
            <span style={{ fontSize: "150px", color: "purple" }}>{myName}</span>
          </h1>
          <p>{100 + 1}</p>
          <p>
            <a href={mySite.url} target={mySite.target}>
              {mySite.name}
            </a>
          </p>
        </header> */}
      </div>
    </>
  );
}

export default App;

