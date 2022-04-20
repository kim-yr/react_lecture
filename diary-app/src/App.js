import "./scss/layout.scss";

import Header from "./components/Header";
//import Main from "./components/Main";
import Footer from "./components/Footer";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import { useState, useRef, useEffect, useMemo } from "react";
import axios from "axios";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [diaryData, setDiaryData] = useState([]);
  const dataId = useRef(0);

  useEffect(() => {
    axios.get(`http://localhost:5000/diary`).then((res) => {
      // console.log(res.data);
      setDiaryData(res.data);
      dataId.current = res.data.length + 1;
      // console.log("dataID.current====", dataId.current);
    });
  }, []);

  //리액트는 화면 랜더링을 최소화 해주는 게 좋음, 쓸데없는 것을 호출할 필요 없음, useMemo, useCallBack
  //useMemo() : 기억해두기, 랜더링 할 때마나 호출하는 게 아니라 끄집어내서 쓰는 것
  const diaryAnalysis = useMemo(() => {
    // console.log("일기 분석");
    const good = diaryData.filter((item) => item.emotion >= 3).length;
    const bad = diaryData.length - good;
    const goodPercent = Math.round((good / diaryData.length) * 100);
    return { good: good, bad, goodPercent }; //값 이름과 변수 이름이 같으면 생략 가능
  }, [diaryData.length]); // [] 이 안에 있는 데이터가 바뀔때만 데이터를 새로 랜더링 함

  const { good, bad, goodPercent } = diaryAnalysis;

  //함수도 props로 넘겨서 사용!
  //일기쓰기
  const insertDiary = (writer, contents, emotion) => {
    const newDiaryItem = {
      id: dataId.current++,
      writer: writer,
      contents: contents,
      emotion: emotion,
      date: new Date().getTime(),
    };
    // dummyDiaryData.push(newDiaryItem);
    setDiaryData(() => [newDiaryItem, ...diaryData]);
  };
  //일기삭제
  const deletDiary = (id) => {
    // console.log("지워졌다.");console.log(id);
    // 무언가를 삭제 할 때는? === filter
    const deletedDiaryList = diaryData.filter((item, idx) => item.id !== id);
    setDiaryData(deletedDiaryList);
    dataId.current--;
  };
  //일기 수정
  const modifyDiary = (id, localContents) => {
    console.log(id, localContents);
    const modifiedDiaryList = diaryData.map((item, idx) => (item.id === id ? { ...item, contents: localContents } : item));
    setDiaryData(modifiedDiaryList);
  };
  console.log(diaryData);
  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      <DiaryEditor insertDiary={insertDiary} />
      <div className="infoBox container">
        <dl>
          <dt>total</dt>
          <dd>
            <strong>{diaryData.length}</strong>
          </dd>
        </dl>
        <dl>
          <dt>
            <span className="material-icons">insert_emoticon</span>
          </dt>
          <dd>
            <strong>{good}</strong>
          </dd>
        </dl>
        <dl>
          <dt>
            <span className="material-icons">mood_bad</span>
          </dt>
          <dd>
            <strong>{bad}</strong>
          </dd>
        </dl>
        <dl>
          <dt>How many good day?</dt>
          <dd>
            <strong>{goodPercent}%</strong>
          </dd>
        </dl>
      </div>
      <DiaryList diaryList={diaryData} deleteDiary={deletDiary} modifyDiary={modifyDiary} />
      <Footer />
    </div>
  );
}

export default App;

