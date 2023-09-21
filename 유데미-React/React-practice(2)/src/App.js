import UserInput from "./components/UserInput/UserInput";
import Header from "./components/Header/Header";
import ResultTable from "./components/ResultTable/ResultTable";
import { useState } from "react";

function App() {
  //최종결과를 상태로 저장하지 않고 userInput을 받아 setUserInput상태 업데이트 함수 설정가능
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput); //useState(null)에 값을 전달
  };
  const yearlyData = []; // 연도별 데이터는 userInput 상태를 기반으로 값을 도출

  //if를 사용하여 userInput 인풋에 값이 true일때만 실행되게 만드는것임
  if (userInput) {
    let currentSavings = +userInput["current-savings"]; // 현재 저축액
    const yearlyContribution = +userInput["yearly-contribution"]; // 연간저축액
    const expectedReturn = +userInput["expected-return"] / 100; //예상 이자율
    const duration = +userInput["duration"]; // 계산기간

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn; //현재 저축액에 대한 연간 이자
      currentSavings += yearlyInterest + yearlyContribution; //현재저축액 += (현재저축*이자율)
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest, // 해당 연도에 발생한 연간 이자
        savingsEndOfYear: currentSavings, //해당 연도의 마지막에 남은 총 저축액
        yearlyContribution: yearlyContribution, //해당 연도에 발생한 연간 저축 금액
      });
    } //이 코드가 실행되면 app.js 컴포넌트 상태가 바뀜(userInput 받을때마다 변경됨)
  }

  //명시적

  // const [results, setResults] = useState(null); // 연도별 데이터를 저장하기 위해서

  // const calculateHandler = (userInput) => {
  //   const yearlyData = []; // 연도별 데이터를 저장하기 위해서

  //   let currentSavings = +userInput["current-savings"]; // 현재 저축액
  //   const yearlyContribution = +userInput["yearly-contribution"]; // 연간저축액
  //   const expectedReturn = +userInput["expected-return"] / 100; //예상 이자율
  //   const duration = +userInput["duration"]; // 계산기간

  //   for (let i = 0; i < duration; i++) {
  //     const yearlyInterest = currentSavings * expectedReturn; //현재 저축액에 대한 연간 이자
  //     currentSavings += yearlyInterest + yearlyContribution; //현재저축액 += (현재저축*이자율)
  //     yearlyData.push({
  //       year: i + 1,
  //       yearlyInterest: yearlyInterest, // 해당 연도에 발생한 연간 이자
  //       savingsEndOfYear: currentSavings, //해당 연도의 마지막에 남은 총 저축액
  //       yearlyContribution: yearlyContribution, //해당 연도에 발생한 연간 저축 금액
  //     });
  //   }
  //   setResults(yearlyData);
  // };

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {!userInput && (
        <p style={{ textAlign: "center" }}>No investment calculated yet!</p>
      )}
      {userInput && (
        <ResultTable
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
