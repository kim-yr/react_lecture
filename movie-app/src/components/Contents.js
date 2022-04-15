import axios from "axios";
import Movie from "./Movie";
import { useEffect, useState } from "react";
export default function Contents() {
  const [movies, setMovies] = useState([]);
  //   const [count, setCount] = useState(0);
  useEffect(() => {
    // console.log("나는 화면이 랜더링 될 때 호출됩니다.");
    axios.get(`http://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=1`).then(function (res) {
      //   console.log(res.data.results);
      setMovies(res.data.results);
    });
  }, []);

  return (
    <div id="contents" className="contents">
      <div className="container">
        <h2 className="subTitle">
          Popular <strong>Movie</strong>
        </h2>
        <ul className="movieList">
          {movies.map((item, idx) => {
            return <Movie info={item} key={idx} />; //반복문 쓸 때는 key값을 반드시 넣어주는 게 좋음
          })}
        </ul>
      </div>
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button> */}
    </div>
  );
}
