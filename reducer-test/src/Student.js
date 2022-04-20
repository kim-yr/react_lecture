import React from "react";

export default function Student({ name, isAttend, id, dispatch }) {
  return (
    <li>
      <div
        className={isAttend ? "name isAttend" : "name"}
        onClick={() => {
          dispatch({ type: "check", payload: { id } });
        }}
      >
        {name}
      </div>
      <div className="isAttent">{isAttend}</div>
      <button
        onClick={() => {
          //   console.log("click");
          dispatch({ type: "delete", payload: { id } });
        }}
      >
        del
      </button>
    </li>
  );
}
