import React from "react";
import Movie from "../components/Movie";
import { dummy } from "../movieDummy";

export default function Movies() {
  return (
    <div>
      <div className="movies-container">
        {dummy.results.map((props) => {
          return (
            <Movie
              title={props.title}
              poster_path={props.poster_path}
              vote_average={props.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}
