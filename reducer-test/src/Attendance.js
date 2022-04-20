import React, { useState, useReducer } from "react";
import Student from "./Student";
import "./scss/layout.scss";

const ACTION_TYPE = {
  ADD: "add",
  DELETE: "delete",
  CHECK: "check",
};
const initState = {
  count: 10,
  students: [],
};
const reducer = (state, action) => {
  //   console.log(state, "---", action);
  switch (action.type) {
    case ACTION_TYPE.ADD:
      const name = action.payload.name;
      const newStudent = {
        id: new Date().getTime(),
        name: name,
        isAttend: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case ACTION_TYPE.DELETE:
      return {
        count: state.count - 1,
        students: state.students.filter((item, idx) => item.id !== action.payload.id),
      };
    case ACTION_TYPE.CHECK:
      return {
        count: state.count,
        students: state.students.map((item, idx) => {
          if (item.id === action.payload.id) {
            return { ...item, isAttend: !item.isAttend };
          } else return { ...item };
        }),
      };
    default:
      return { count: state.count, students: state.students };
  }
};
export default function Attendance() {
  const [name, setName] = useState("");
  const [studentInfo, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <header id="header">
        <h1>Attendance Book</h1>
      </header>
      <div className="contents container">
        <p className="total">Total : {studentInfo.count}</p>
        <div className="inputBox">
          <input type="text" placeholder="이름을 입력하세요" value={name} onChange={(e) => setName(e.target.value)} />
          <button
            onClick={() => {
              dispatch({ type: ACTION_TYPE.ADD, payload: { name } });
            }}
          >
            ADD
          </button>
        </div>
        <div className="studentList">
          <ul>
            {studentInfo.students.map((item, idx) => {
              return <Student key={item.id} name={item.name} isAttend={item.isAttend} id={item.id} dispatch={dispatch} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
