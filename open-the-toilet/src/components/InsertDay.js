import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function InsertDay() {
  const navigate = useNavigate();
  const [days, setDays] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/days`).then((res) => {
      setDays(res.data);
    });
  }, []);
  function insertDay() {
    // console.log("aaa");
    axios.post(`http://localhost:5000/days`, { day: days.length + 1 }).then((res) => {
      console.log(res);
      if (res.statusText === "Created") {
        alert("day가 추가되었습니다.");
        navigate("/");
      }
    });
  }
  return (
    <div className="container dayBox">
      <h2 className="title">INSERT DAY</h2>
      <p className="current">
        CURRENT DAY : <strong>{days.length} DAY</strong>
      </p>
      <div className="btns">
        <button className="btn" onClick={insertDay}>
          ADD DAY
        </button>
      </div>
    </div>
  );
}
