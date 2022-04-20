import React from "react";

import DiaryListItem from "./DiaryListItem";

//react는 형제끼리 데이터 전달 안 됨, 무조건 위에서 아래로,, =props drilling -> reducer, redux등등 사용

export default function DiaryList({ diaryList, deleteDiary, modifyDiary }) {
  //   console.log(diaryList);
  return (
    <div className="diaryList">
      <div className="container">
        <div className="titleBox">
          <h2>diary list</h2>
          <p className="total">{diaryList.length}개의 일기가 있습니다.</p>
        </div>
        <ul className="list">
          {diaryList.map((item, idx) => (
            // <DiaryListItem item={item} key={item.id} />
            <DiaryListItem key={item.id} {...item} deleteDiary={deleteDiary} modifyDiary={modifyDiary} /> //이렇게 뿌리면 분리가 됨
          ))}
        </ul>
      </div>
    </div>
  );
}
