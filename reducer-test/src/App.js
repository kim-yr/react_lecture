import "./App.css";
import { useState, useReducer } from "react";

//app이 복잡해지는 경우 type을 통해서만 데이터를 바꿀 수 있게 함. 데이터가 중앙에 집중 됨
//function바깥에 있으므로 또다른 js로 빼서 쓸 수도 이씀
const ACTION_TYPE = {
  DEPOSIT: "deposit",
  WITHDRAWL: "withdrawl",
};
const reducer = (state, action) => {
  // console.log(state, action);
  // if (action.type === "입금") {
  //   return state + action.payload;
  // } else if (action.type === "출금") {
  //   return state - action.payload;
  // } 실무에서는 switch 많이 씀
  switch (action.type) {
    case ACTION_TYPE.DEPOSIT:
      return state + action.payload;
    case ACTION_TYPE.WITHDRAWL:
      return state - action.payload;
    default:
      return state;
  }
};
function App() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0); //[상태, 변경함수] (사용할 함수, 초기값)
  return (
    <div className="App">
      <h1>Use reducer</h1>
      <div>
        <p>잔고 : {money}원</p>
      </div>
      <div>
        <input
          type="number"
          step="1000"
          value={number}
          onChange={(e) => {
            setNumber(parseInt(e.target.value));
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: ACTION_TYPE.DEPOSIT, payload: number });
          }}
        >
          입금
        </button>
        <button
          onClick={() => {
            dispatch({ type: ACTION_TYPE.WITHDRAWL, payload: number });
          }}
        >
          출금
        </button>
      </div>
    </div>
  );
}

export default App;

