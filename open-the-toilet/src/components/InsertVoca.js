import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function InsertVoca() {
  const [days, setDays] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/days`).then((res) => {
      //   console.log(res);
      setDays(res.data);
    });
  }, []); //빈 배열 던지면 한 번만 실행
  //   console.log(days);
  //useRef, form태그에 사용, dom에 직접적인 접근 가능하도록 함
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);
  //   console.log(engRef.current);
  const navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault(); //form의 기본 기능(=데이터 전송) 막기
    console.log("onSubmit");
    axios
      .post(`http://localhost:5000/voca`, {
        day: parseInt(dayRef.current.value),
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false,
      })
      .then((res) => {
        // console.log(res);
        if (res.statusText === "Created") {
          alert("생성되었습니다.");
          navigate(`/${dayRef.current.value}`);
        }
      });
  }
  return (
    <div className="container dayBox">
      <h2 className="title">insert voca</h2>
      <form onSubmit={onSubmit} className="vocaBox">
        <div className="inputBox">
          <label>ENG</label>
          <input type="text" placeholder="Write english word." ref={engRef}></input>
        </div>
        <div className="inputBox">
          <label>KOR</label>
          <input type="text" placeholder="뜻을 적으세요." ref={korRef}></input>
        </div>

        <div className="inputBox">
          <label>Day</label>
          <select ref={dayRef}>
            {days.map((item, idx) => {
              //   console.log(item);
              return (
                <option value={item.day} key={item.id}>
                  {item.day}
                </option>
              );
            })}
          </select>
        </div>
        <div className="btns">
          <button className="btn confirm">save</button>
        </div>
      </form>
    </div>
  );
}
