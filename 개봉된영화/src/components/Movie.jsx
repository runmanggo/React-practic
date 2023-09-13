import React from "react";
import { useNavigate } from "react-router-dom";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie(props) {
  const navigate = useNavigate();
  //  프로그래밍적 전환 특정 경로로 이동하거나 리다이렉트할 수 있음

  const onClickMovieItem = () => {
    // 특정 경로로 이동
    navigate(`/movie/${props.title}`, {
      state: props,
      //페이지 전환 시 데이터를 다음 페이지로 전달하기 위해 사용한 코드
      // state 속성을 이용하여 전달된 데이터는 다음 페이지의 컴포넌트에서 useLocation() 훅을 통해 접근 가능
    });
  };

  return (
    <div className="movie-container" onClick={onClickMovieItem}>
      <img src={IMG_BASE_URL + props.poster_path} alt="영화포스터" />
      <div className="movie-info">
        <h4>{props.title}</h4>
        <span>{props.vote_average}</span>
      </div>
    </div>
  );
}
