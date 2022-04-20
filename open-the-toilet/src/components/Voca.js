import axios from "axios";
import { useState } from "react";

export default function Voca({ info: _info }) {
  const [info, setInfo] = useState(_info);
  const [isVisible, setIsVisiable] = useState(true);
  const [isDone, setIsDone] = useState(info.isDone);
  function hiddenToggle() {
    setIsVisiable(!isVisible);
  }
  function doneToggle(e) {
    // setIsDone(!isDone);
    //c(post)r(get)u(put/patch)d(delete)
    axios
      .put(`http://localhost:5000/voca/${info.id}`, {
        // day: info.day,
        // eng: info.eng,
        // kor: info.kor,
        ...info, // 기존 데이터 뿌리기 (spread 연산자  기존데이터 뿌리기.....)
        isDone: !isDone,
      })
      .then(function (res) {
        // console.log(res);
        if (res.statusText === "OK") {
          setIsDone(!isDone);
        }
      });
  }
  function deleteVoca() {
    console.log("delete");
    if (window.confirm("삭제하시겠습니까?")) {
      axios.delete(`http://localhost:5000/voca/${info.id}`).then(function (res) {
        console.log(res);
        if (res.statusText === "OK") {
          //id값을 -1로 바꾼다. // 값이 바뀌는걸 알아야 화면을 갱신할 수 있다.  useState
          setInfo({ id: -1 });
          console.log("info====", info);
        }
      });
    }
  }
  console.log("info.id====", info.id);
  if (info.id === -1) {
    return null;
  }
  return (
    //className을 바꿔주는 useState를 만들고...
    //checkBox에 이벤트 onChange 이벤트를 걸어서 클릭할때마다 토글.....
    <li key={info.id} className={isDone ? "done" : ""}>
      {/*반복 되는 곳에는 key가 있어야 함, 여기 말고 Day.js의 <Voca>가 반복이라 거기에 적어야 함 */}
      <div className="check">
        <label>
          <input type="checkbox" checked={isDone} onChange={hiddenToggle} />
        </label>
      </div>
      <div className="eng">{info.eng} </div>
      <div className="kor">{isVisible && info.kor} </div>
      <div className="btns">
        <button className="btn hidden" onClick={hiddenToggle}>
          {isVisible ? "hidden" : "show"}
        </button>
        <button className="btn del" onClick={deleteVoca}>
          delete
        </button>
      </div>
    </li>
  );
}
