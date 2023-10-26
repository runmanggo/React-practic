import { useState, useCallback } from "react";

const useHttp = (/*requestConfig,applyData*/) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //데이터 가져오기
  const sendRequest = useCallback(
    async (requestConfig, applyData) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          // "https://react-http-feb6e-default-rtdb.firebaseio.com/tasks.json"
          requestConfig.url,
          {
            method: requestConfig.method ? requestConfig.method : "GET",
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: JSON.stringify(requestConfig.body)
              ? JSON.stringify(requestConfig.body)
              : null,
          }
        );

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();

        // const loadedTasks = [];

        // for (const taskKey in data) {
        //   loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        // }

        // setTasks(loadedTasks);
        applyData(data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [
      /*requestConfig,applyData*/
    ]
  ); // 외부 의존성이 아닌 래핑된 함수의 매개변수가 되어서 주석 처리

  return {
    // isLoading: isLoading,
    // error: error,
    // sendRequest: sendRequest,
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
