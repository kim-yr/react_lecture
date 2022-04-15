import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import qs from "qs";
import Movie from "./Movie";

import axios from "axios";
export default function SearchResult() {
  //console.log(useParams().id);
  const location = useLocation(); //바뀐 부분
  const [movies, setMovies] = useState([]);
  const query = qs.parse(location.search, { ignoreQueryPrefix: true }).movie;
  //const query = "기생충";
  console.log(location);
  console.log("query===", query);
  useEffect(function () {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&language=ko-KR`).then((res) => {
      console.log(res.data);
      //setDetail(res.data);
      //setGenreList(res.data.genres);
      setMovies(res.data.results);
    });
  }, []);

  return (
    <div id="contents" className="contents">
      <div className="container">
        <h2 className="subTitle">
          popular <strong>movie</strong>
        </h2>
        <ul className="movieList">
          {movies.map(function (item, idx) {
            return <Movie info={item} key={idx} />;
          })}
        </ul>
      </div>
    </div>
  );
}
