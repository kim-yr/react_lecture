import { useState } from "react";
function Header() {
  //   const title = "MOVIE APP TMDB";
  const [title, setTitle] = useState("Movie App");
  //   const list = [
  //     { name: "김예령", nickname: "애렁이" },
  //     { name: "장혁", nickname: "황기시키신분" },
  //     { name: "이창섭", nickname: "이창삽" },
  //     { name: "장원영", nickname: "워뇨" },
  //   ];
  //   list.map((item, idx) => {
  //     console.log(item.name, "===", item.nickname);
  //   });
  return (
    <>
      <header id="header" className="header">
        <h1>{title}</h1>
      </header>
      {/* <ul>
        {list.map((item, idx) => {
          return <li>{item.name}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          if (title === "Movie App") {
            setTitle("MOOOOVIE APP");
          } else {
            setTitle("Movie App");
          }
        }}
      >
        타이틀 바꾸기
      </button> */}
    </>
  );
}
export default Header;
