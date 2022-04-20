// import dummyData from "../db/data.json";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Link 사용하면 a태그가 자동으로 생김
export default function Days() {
  //   console.log(dummyData);
  const [days, setDays] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/days").then((res) => {
      // console.log(res.data);
      setDays(res.data);
    });
  }, []); //한번만 딱 실행, function이랑 [] 필요
  return (
    // <ul className="days container">
    //   {dummyData.days.map((item, idx) => {
    //     return (
    //       <li key={item.id}>
    //         <Link to={`/${item.day}`}>day {item.day}</Link>
    //       </li>
    //     );
    //   })}
    // </ul>
    <ul className="days container">
      {days.map((item, idx) => {
        return (
          <li key={item.id}>
            <Link to={`/${item.day}`}>day {item.day}</Link>
          </li>
        );
      })}
    </ul>
  );
}
