import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  // fetch 사용
  // function fetchMoviesHandler() {
  //   fetch("https://swapi.dev/api/films")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const transformMovies = data.results.map((movieData) => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releaseDate: movieData.release_date,
  //         };
  //       });
  //       setMovies(transformMovies);
  //     });
  // }

  // async / await 사용
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    const transformMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformMovies);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    console.log("실행중");
    fetchMoviesHandler();
  }, [fetchMoviesHandler]); 

  /**
   * 이것은 일반적으로 useEffect의 종속성 배열에 함수를 직접 추가하면 
   * 해당 함수가 변경될 때마다 useEffect가 실행되기 때문입니다
   * 
   * useCallback을 사용하면 함수를 캐시하여 동일한 함수 참조를 계속 사용하므로 
   * 종속성 배열에 useCallback에서 반환한 함수를 추가하면 해당 함수가 변경될 때에만
   *  useEffect가 실행됩니다
   */

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>영화가 없습니다.</p>}
        {isLoading && <p>로딩중...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
