import dummyData from "../db/data.json";
import Voca from "./Voca";
import { Link, useParams, useNavigate } from "react-router-dom";
//Link 사용하면 a태그가 자동으로 생김
export default function Day() {
  //   console.log(dummyData);
  const navigate = useNavigate();
  const { day } = useParams();
  //   console.log(day);
  //filter : 데이터더미에서 필요한 걸 걸러냄
  const filterVoca = dummyData.voca.filter((item) => item.day === Number(day));
  //함수 안에 코드가 한줄이면 return도 생략후 이렇게 작성 가능
  //사용할 인자가 하나일때는 괄호도 생략 가능/지금은 프리티어땜에 붙음
  //   console.log("///", filterVoca);
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
          className="btn back"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}
