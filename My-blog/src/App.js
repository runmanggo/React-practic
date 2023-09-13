import "./reset.css";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState([
    { id: 1, title: "붕어빵 타이쿤", heart: 0, date: generateRandomDate() },
    { id: 2, title: "붕어빵 타이쿤", heart: 0, date: generateRandomDate() },
    { id: 3, title: "붕어빵 타이쿤", heart: 0, date: generateRandomDate() },
  ]);

  function getMaxId(arr) {
    if (arr.length === 0) {
      return null; // 배열이 비어있을 경우 예외 처리
    }

    let maxId = arr[0].id; //디폴트가 배열 첫객체의 id

    for (let i = 1; i < arr.length; i++) {
      if (arr[i].id > maxId) {
        maxId = arr[i].id;
      }
    }
    // length 길이는 1부터 인식 , maxId를 기본으로 설정해줬기 때문에 0부터 시작이 아닌 1로 설정

    return maxId;
  }

  const maxId = getMaxId(title);

  function UploadTitle(data) {
    data.id = maxId + 1;
    setTitle([data, ...title]);
  }

  function deleted(index) {
    const IconX = [...title];
    IconX.splice(index, 1);
    setTitle(IconX);
  }
  // index card 의 고유 id

  function PlusHeart(index) {
    const HeartIcon = [...title];
    HeartIcon[index].heart += 1;
    setTitle(HeartIcon);
  }

  /** 업로드 코드,
   * setTitle usestate 함수를 사용하여, data 인자를 사용하여 input에서 작성하는 데이터를
   * 넣어주고, title은 usetate를 사용하여 복사를 해줌
   * 전체적으로 쓴 이유 -> 자식에서 부모로 올려줄려고*/

  function generateRandomDate() {
    const startTimestamp = new Date("2023-01-01").getTime();
    const endTimestamp = new Date().getTime();

    const randomTimestamp =
      Math.random() * (endTimestamp - startTimestamp) + startTimestamp;

    const randomDate = new Date(randomTimestamp);
    return randomDate.toISOString().split("T")[0];
  }

  return (
    <div className="App">
      <div className="Header">
        <Header onUpload={UploadTitle} />
        {/** 위 UploadTitle 함수를 먼저 app.js 사용하여 자식 한테 전달
         * on뭐시기는 걍 개발자가 작성하는 것
         */}
      </div>
      <div className="Main">
        {title.map(function (a, i) {
          return (
            <Card
              key={a.id}
              idx={i}
              title={a.title}
              heart={a.heart}
              date={a.date}
              onDelete={deleted}
              onPlus={PlusHeart}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
