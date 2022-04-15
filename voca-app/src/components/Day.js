// import dummyData from "../db/data.json";
import Voca from "./Voca";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
//Link 사용하면 a태그가 자동으로 생김
export default function Day() {
  //   console.log(dummyData);
  const navigate = useNavigate();
  const { day } = useParams();

  const [voca, setVoca] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/voca?day=${day}`).then((res) => {
      setVoca(res.data);
    });
  }, []);

  const filterVoca = voca.filter((item) => item.day === Number(day));

  return (
    <div className="dayBox container">
      <h2 className="title">Day-{day}</h2>
      <ul className="vocas">
        {/*반복 되는 곳에는 key가 있어야 함 =Voca */}
        {filterVoca.map((item, idx) => {
          return <Voca info={item} key={item.id} />;
        })}
      </ul>
      <div className="btns">
        <button
          className="btn list"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}
