import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Detail() {
  //해당되는 영화의 정보를 뿌려주면 된다.
  const params = useParams();
  const navigate = useNavigate();
  //console.log(navigate);
  const movieID = params.id;
  const [movieInfo, setMovieInfo] = useState({});
  const [genre, setGenre] = useState([]);
  useEffect(function () {
    axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR`).then(function (res) {
      console.log(res);
      setMovieInfo(res.data);
      setGenre(res.data.genres);
    });
  }, []);

  return (
    <div id="contents" className="contents">
      <div className="container">
        <h2 className="subTitle">Detail</h2>
        <div className="detailBox">
          <div className="imgBox">
            <img src={`https://image.tmdb.org/t/p/w780/${movieInfo.poster_path}`} alt="" />
          </div>
          <div className="info">
            <div className="titleBox">
              <h3>{movieInfo.title}</h3>
              <p>{movieInfo.original_title}</p>
              <button
                className="btnList"
                onClick={function () {
                  //navigate("/");
                  navigate(-1);
                }}
              >
                LIST
              </button>
            </div>
            <div className="summary">
              <dl>
                <dt>장르</dt>
                <dd>
                  <ul className="genreList">
                    {genre.map(function (item, idx) {
                      return <li key={idx}>{item.name}</li>;
                    })}
                  </ul>
                </dd>
              </dl>
              <dl>
                <dt>개봉일</dt>
                <dd>{movieInfo.release_date}</dd>
              </dl>
              <dl>
                <dt>평점</dt>
                <dd>{movieInfo.vote_average}</dd>
              </dl>
              <dl>
                <dt>관객 투표</dt>
                <dd>{movieInfo.vote_count}</dd>
              </dl>
              <dl>
                <dt>줄거리</dt>
                <dd>{movieInfo.overview}</dd>
              </dl>
            </div>
          </div>
          <div className="bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w780/${movieInfo.backdrop_path})` }}></div>
        </div>
      </div>
    </div>
  );
}
