import { useState, useRef } from "react";

export default function DiaryEditor({ insertDiary }) {
  //   console.log(insertDiary);
  //state
  //   const [writer, setWriter] = useState("");
  //   const [contents, setContents] = useState("");
  //   const [emotion, setEmotion] = useState(1);
  //   state를 합져보자, state를 객체로 받기
  const [diaryItem, setDiaryItem] = useState({
    writer: "",
    contents: "",
    emotion: 1,
  });
  //   function changeWriter(e) {
  //     setWriter(e.target.value);
  //     console.log(writer);
  //   }
  //   function changeContents(e) {
  //     setContents(e.target.value);
  //     console.log(contents);
  //   }
  //   function changeEmotion(e) {
  //     setEmotion(e.target.value);
  //     console.log(emotion);
  //   }
  //   함수를 합쳐보자
  //   function changeDiaryItem(e) {
  //     const targetName = e.target.name;
  //     // console.log(targetName);
  //     switch (targetName) {
  //       case "writer":
  //         setDiaryItem({
  //           //   writer: e.target.value,
  //           //   contents: diaryItem.contents,
  //           //   emotion: diaryItem.emotion,
  //           // 흩뿌리기
  //           ...diaryItem, //spread 연산자
  //           writer: e.target.value,
  //         });
  //         break;
  //       case "contents":
  //         setDiaryItem({
  //           //   writer: diaryItem.writer,
  //           //   contents: e.target.value,
  //           //   emotion: diaryItem.emotion,
  //           ...diaryItem,
  //           contents: e.target.value,
  //         });
  //         break;
  //       case "emotion":
  //         setDiaryItem({
  //           //   writer: diaryItem.writer,
  //           //   contents: diaryItem.contents,
  //           //   emotion: e.target.value,
  //           ...diaryItem,
  //           emotion: e.target.value,
  //         });
  //         break;
  //       default:
  //         break;
  //     }
  //     console.log(diaryItem);
  //   }
  // 최종적으로 이렇게 줄일 수 있다!!

  function changeDiaryItem(e) {
    setDiaryItem({
      ...diaryItem,
      [e.target.name]: e.target.value,
    });
    // console.log(diaryItem);
  }
  //   const temp = {
  //     name: "강동원",
  //     age: "40",
  //     state: "handsome",
  //   };
  //   console.log(temp.name);
  //   console.log(temp["age"]); //대괄호 표기법

  const writerRef = useRef();
  const contentsRef = useRef();
  function insertDiaryItemProcess() {
    if (diaryItem.writer.length < 3) {
      //   console.log(writerRef);
      alert("이름은 최소 3글자 이상이어야 합니다.");
      writerRef.current.focus();
      return;
    } else if (diaryItem.contents.length < 5) {
      alert("일기 내용은 최소 5글자 이상이어야 합니다.");
      contentsRef.current.focus();
      return;
    } else {
      insertDiary(diaryItem.writer, diaryItem.contents, diaryItem.emotion);
      alert("저장되었습니다!");
      //   console.log(diaryItem);
      setDiaryItem({
        writer: "",
        contents: "",
        emotion: 1,
      });
      writerRef.current.focus();
      return;
    }
  }
  return (
    <div className="container">
      <div className="writer section">
        <input type="text" placeholder="이름을 입력해 주세요." name="writer" value={diaryItem.writer} ref={writerRef} onChange={changeDiaryItem} />
      </div>
      <div className="contents section">
        <textarea placeholder="내용을 입력해 주세요." name="contents" value={diaryItem.contents} ref={contentsRef} onChange={changeDiaryItem}></textarea>
      </div>
      <div className="emotion section">
        <label>오늘 하루 어땠나요?</label>
        <select name="emotion" value={diaryItem.emotion} onChange={changeDiaryItem}>
          {/*바로 숫자로 집어 넣을 때 중괄호 안에 숫자 씀 */}
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div className="btns section">
        <button className="btn confirm" onClick={insertDiaryItemProcess}>
          SAVE
        </button>
      </div>
    </div>
  );
}
