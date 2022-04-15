import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Detail() {
  //console.log(useParams().id);
  const params = useParams();
  const movieId = params.id;
  const [detail, setDetail] = useState({});
  const [genreList, setGenreList] = useState([]);
  useEffect(function () {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR`).then((res) => {
      console.log(res.data);
      setDetail(res.data);
      setGenreList(res.data.genres);
    });
  }, []);

  return (
    <div id="contents" className="contents">
      <div className="container">
        <h2 className="subTitle">Detail</h2>
        <div className="container detailBox">
          <div className="imgBox">
            <img src={`https://image.tmdb.org/t/p/w780/${detail.poster_path}`} alt="" />
          </div>
          <div className="info">
            <div className="titleBox">
              <h3>{detail.title}</h3>
              <p>{detail.original_title}</p>
            </div>
            <div className="summary">
              <dl>
                <dt>장르</dt>
                <dd>
                  <ul className="genreList">
                    {genreList.map((item) => {
                      return <li>{item.name}</li>;
                    })}
                  </ul>
                </dd>
              </dl>
              <dl>
                <dt>개봉일</dt>
                <dd>{detail.release_date}</dd>
              </dl>
              <dl>
                <dt>관객 평점</dt>
                <dd>{detail.vote_average}</dd>
              </dl>
              <dl>
                <dt>관객 투표</dt>
                <dd>{detail.vote_count}</dd>
              </dl>
            </div>
            <div className="overview">
              <dl>
                <dt>개요</dt>
                <dd>{detail.overview}</dd>
              </dl>
            </div>
          </div>
          <div className="bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${detail.backdrop_path})` }}></div>
        </div>
      </div>
    </div>
  );
}
