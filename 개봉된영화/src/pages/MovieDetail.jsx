import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { IMG_BASE_URL } from "../components/Movie"; //해당 경로에서 변수를 불러옴

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation(); //useLocation 사용해서 , 상위 페이지인 movie에서 state:props 속성을 이용해서 전달받음

  return (
    <div className="page-container">
      <div style={{ display: "flex" }}>
        <img
          style={{ width: "300px", height: "450px" }}
          src={IMG_BASE_URL + state.poster_path}
          alt="영화포스터이미지"
        />
        <div>
          <div style={{ fontSize: "32px" }}>{title}</div>
        </div>
      </div>
    </div>
  );
}
