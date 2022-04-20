import React, { useState, useRef } from "react";

// export default function DiaryListItem({ item }) {
//   return (
//     <li className="diaryItem">
//       <div className="info">
//         <dl>
//           <dt>글쓴이 : </dt>
//           <dd>{item.writer}</dd>
//         </dl>
//         <dl>
//           <dt>그날의 감정 : </dt>
//           <dd>{item.emotion}</dd>
//         </dl>
//         <dl>
//           <dt>작성일 : </dt>
//           <dd>{item.date}</dd>
//         </dl>
//         <dl>
//           <dt>내용 : </dt>
//           <dd>{item.contents}</dd>
//         </dl>
//       </div>
//     </li>
//   );
// }

export default function DiaryListItem({ writer, id, emotion, date, contents, deleteDiary, modifyDiary }) {
  const contentsRef = useRef((e) => {
    console.log(e);
  });
  const [isEdit, setIsEdit] = useState(false);
  const [localContents, setLocalContents] = useState(contents);
  function removeDiaryItem() {
    if (window.confirm(`${id}번째 일기를 삭제하시겠어요?`)) {
      // console.log("지우기");
      deleteDiary(id);
    }
  }
  function modifyDiaryItem() {
    if (window.confirm(`${id}번째 일기를 수정하시겠어요?`)) {
      // modifyDiary(id, contents);
      isEditToggle();
    }
  }
  function isEditToggle() {
    setIsEdit(!isEdit);
  }
  function cancelModify() {
    isEditToggle();
    setLocalContents(contents);
  }
  function confirmModify() {
    if (window.confirm(`수정한 일기를 저장하시겠어요?`)) {
      if (localContents.length < 5) {
        alert("일기 내용은 최소 5글자 이상이어야 합니다.");
        contentsRef.current.focus();
        return;
      } else {
        modifyDiary(id, localContents);
        isEditToggle();
      }
    }
  }
  return (
    <li className="diaryItem">
      <div className="info">
        <dl>
          <dt>글쓴이 : </dt>
          <dd>{writer}</dd>
        </dl>
        <dl>
          <dt>그날의 감정 : </dt>
          <dd>{emotion}</dd>
        </dl>
        <dl>
          <dt>작성일 : </dt>
          <dd>{new Date(date).toLocaleString()}</dd>
        </dl>
        <div className="btns">
          {isEdit ? (
            <>
              <button className="btn save" onClick={confirmModify}>
                <span className="material-icons">check</span>
              </button>
              <button className="btn modify" onClick={cancelModify}>
                <span className="material-icons">close</span>
              </button>
            </>
          ) : (
            <>
              <button className="btn delete" onClick={removeDiaryItem}>
                <span className="material-icons">delete</span>
              </button>
              <button className="btn modify" onClick={modifyDiaryItem}>
                <span className="material-icons">edit</span>
              </button>
            </>
          )}
        </div>
      </div>
      <div className="contents">
        {isEdit ? (
          <textarea
            ref={contentsRef}
            value={localContents}
            onChange={(e) => {
              setLocalContents(e.target.value);
            }}
          ></textarea>
        ) : (
          contents
        )}
      </div>
    </li>
  );
}
