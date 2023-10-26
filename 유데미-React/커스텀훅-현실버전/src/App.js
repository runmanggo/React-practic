import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  // {
  //   url: "https://react-http-feb6e-default-rtdb.firebaseio.com/tasks.json",
  // },
  // transformTasks // app컴포넌트가 재평가될때마다 재생성

  //데이터 가져오기
  // const fetchTasks = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       "https://react-http-feb6e-default-rtdb.firebaseio.com/tasks.json"
  //     );

  //     if (!response.ok) {
  //       throw new Error("Request failed!");
  //     }

  //     const data = await response.json();

  //     // const loadedTasks = [];

  //     // for (const taskKey in data) {
  //     //   loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  //     // }

  //     // setTasks(loadedTasks);
  //   } catch (err) {
  //     setError(err.message || "Something went wrong!");
  //   }
  //   setIsLoading(false);
  // };

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    }; // 상태 갱신한는 함수인 setTasks 외에 어떤것도 외부에서 가져오지 않아서 (현재는 useEffect 두번째 인자로 사용)
    //불변성 보장됨

    fetchTasks(
      {
        url: "https://react-http-feb6e-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
